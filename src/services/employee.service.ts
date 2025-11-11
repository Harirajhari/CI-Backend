import prisma from "../lib/prisma";
import { User } from "@prisma/client";





export async function getEmployeeProfile(userId: string): Promise<any> {
  try {
    const profile = await prisma.employeeProfile.findFirst({ where: { user_id: userId } });
    return profile;
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('getEmployeeProfile error', err);
    throw err;
  }
}

export async function createEmployeeInDB(email: string, entraId: string, name: string, role: string): Promise<{user: User, employeeProfile: any}> {
  try {
    // find an organization to attach the user to; if none exists create a default one
    let org = await prisma.organization.findFirst();
    if (!org) {
      org = await prisma.organization.create({ data: { name: 'default' } });
    }

    const [first_name, ...rest] = (name || '').split(' ');
    const last_name = rest.length ? rest.join(' ') : null;

    let user = await prisma.user.create({
      data: {
        org_id: org.id,
        email: email,
        password_hash: '', // ! remove password field from schema
        username: email,
        first_name: first_name || null,
        last_name,
        role,
        entra_id: entraId,
        entra_upn: email,
      },
    });

    let employeeProfile = await prisma.employeeProfile.create({
      data: {
        user_id: user.id,
        // additional profile fields here.
      },
    });

    return { user, employeeProfile };

  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('createEmployeeInDB error', err);
    throw err;
  }
}

export async function getEmployeeProfileByEmail(email: string): Promise<any> {
  try {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      throw new Error('User not found');
    }
    return user;
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('getEmployeeProfileByEmail error', err);
    throw err;
  }
}


// ! Family history model not created yet. Once created and added the fields, uncomment and implement this function.

export async function getEmployeeFamilyHistory(userId: string): Promise<any> {
  // try {
  //   const familyHistory = await prisma.familyHistory.findMany({ where: { user_id: userId } });
  //   return familyHistory;
  // } catch (err) {
  //   // eslint-disable-next-line no-console
  //   console.error('getEmployeeFamilyHistory error', err);
  //   throw err;
  // }
}

