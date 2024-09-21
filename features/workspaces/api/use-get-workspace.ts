import { useQuery } from 'convex/react';

import { api } from '@/convex/_generated/api';
import { Id } from '@/convex/_generated/dataModel';

interface useGetWorkspaceProps {
    id: Id<'workspaces'>;
}

const useGetWorkspace = ({id}: useGetWorkspacesProps) => {
    const data = useQuery(api.workspaces.getById, {id});
    const isLoading = data === undefined;

    return { data, isLoading };
}

export default useGetWorkspace
