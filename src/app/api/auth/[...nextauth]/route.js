import NextAuth from 'next-auth';
import { authOption } from '@/app/utils/auth';

const handler = NextAuth(authOption);

export { handler as GET, handler as POST };
