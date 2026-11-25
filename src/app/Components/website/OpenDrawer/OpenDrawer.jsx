import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import CloseIcon from "@mui/icons-material/Close";

export default function DrawerWithSides({
  DirectionSlide,
  ButtonText,
  drawerTitle,
  children,
  submitText,
  cancelText,
}) {
  return (
    <div className="flex flex-wrap gap-2">
      <Drawer direction={DirectionSlide}>
        <DrawerTrigger asChild>
          <Button variant="outline" className="capitalize w-full font-bold">
            {ButtonText}
          </Button>
        </DrawerTrigger>
        <DrawerContent className="data-[vaul-drawer-direction=bottom]:max-h-[50vh] data-[vaul-drawer-direction=top]:max-h-[50vh] bg-gray-200">
          <DrawerHeader className="flex justify-between flex-row items-center">
            <DrawerTitle className="font-bold text-lg">
              {drawerTitle}
            </DrawerTitle>
            <DrawerClose>
              <button className="cursor-pointer">
                <CloseIcon />
              </button>
            </DrawerClose>
          </DrawerHeader>
          <div className="no-scrollbar overflow-y-auto px-4">{children}</div>
          <DrawerFooter className="flex flex-row justify-end ">
            <DrawerClose asChild>
              <Button variant="outline" className="text-lg p-5">
                {cancelText}
              </Button>
            </DrawerClose>
            <Button className="bg-amber-400 p-5 text-lg hover:bg-amber-500">{submitText}</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
