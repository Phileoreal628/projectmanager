import { auth } from '@clerk/nextjs';

const OrganizationIdPage = () => {
  const { orgId } = auth();
  return <div>Organization Page ! {orgId}</div>;
};

export default OrganizationIdPage;
