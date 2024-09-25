import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { useCreateWorkChannelModal } from "@/features/channels/store/use-create-channel-modal";

export const CreateChannelModal = () => {
  const [open, setOpen] = useCreateWorkChannelModal();
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle> Add a channel </DialogTitle>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
