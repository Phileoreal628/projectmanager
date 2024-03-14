'use client';

import { Accordion } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { useOrganization, useOrganizationList } from '@clerk/nextjs';
import { Plus } from 'lucide-react';
import Link from 'next/link';
import { useLocalStorage } from 'usehooks-ts';
import { NavItem, organization } from './nav-Item';

interface SideBarProps {
  storageKey?: string;
}

export const SideBar = ({ storageKey = 't-sidebar-state' }: SideBarProps) => {
  const [expanded, setExpanded] = useLocalStorage<Record<string, any>>(
    storageKey,
    {},
  );

  const { organization: activeOrg, isLoaded } = useOrganization();
  const { isLoaded: isLoadedList, userMemberships } = useOrganizationList({
    userMemberships: {
      infinite: true,
    },
  });
  const defaultOrgValue = Object.keys(expanded).reduce(
    (acc: string[], currValue: string): string[] => {
      if (expanded[currValue]) acc.push(currValue);
      return acc;
    },
    [],
  );

  const onExpand = (id: string) => {
    setExpanded((curr) => {
      return { ...curr, [id]: !expanded[id] };
    });
  };

  if (!isLoaded || !isLoadedList || userMemberships.isLoading) {
    return (
      <>
        <div className='flex items-center justify-between mb-2'>
          <Skeleton className='h-10 w-[50%]' />
          <Skeleton className='h-10 w-10' />
        </div>
        <div className='space-y-2'>
          <NavItem.skeleton />
          <NavItem.skeleton />
        </div>
      </>
    );
  }
  return (
    <>
      <div className='font-medium text-xs flex items-center mb-1'>
        <span className='pl-4'>WorkSpaces</span>
        <Button
          asChild
          variant='ghost'
          type='button'
          size='icon'
          className='ml-auto'
        >
          <Link href='/select-org'>
            <Plus className='w-4 h-4' />
          </Link>
        </Button>
      </div>
      <Accordion
        type='multiple'
        className='space-y-2'
        defaultValue={defaultOrgValue}
      >
        {userMemberships.data.map(({ organization }) => (
          <NavItem
            key={organization.id}
            isActive={activeOrg?.id === organization.id}
            isExpanded={expanded[organization.id]}
            organization={organization as organization}
            onExpand={onExpand}
          />
        ))}
      </Accordion>
    </>
  );
};
