import { CopyIcon, Ghost } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { useWorkspaceId } from "@/hooks/use-workspace-id";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface InviteModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  name: string;
  joinCode: string;
}

export const InviteModal = ({
  open,
  setOpen,
  name,
  joinCode,
}: InviteModalProps) => {
  const workspaceId = useWorkspaceId();
  const handleCopy = () => {
    const inviteLink = `${window.location.origin}/join/${workspaceId}`;

    navigator.clipboard
      .writeText(inviteLink) //window.navigator... is a promise that requires toast
      .then(() => toast.success("Invite link copied to clipboard"));
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Invite people to {name}</DialogTitle>
          <DialogDescription>
            Use this code to invite people to your workspace:
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-y-4 items-center justify-center py-10">
          <p className="text-4xl font-bold tracking-widest uppercase">
            {joinCode}
          </p>
          <Button onClick={handleCopy} variant="ghost" size="sm">
            Copy link
            <CopyIcon className="ml-2 size-4" />
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
