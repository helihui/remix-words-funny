import { UserAvatar } from "./UserAvatar";
import { SettingButton } from "./SettingButton";
import { SignInButton } from "./SignInButton";
import { useMyUserInfo } from "~/hooks/useMyUserInfo";
import { useSetAtom } from "jotai";
import { isProfileModalOpenAtom } from "./ProfileModal";
import { Button } from "@nextui-org/react";
import { LuIcon } from "./LuIcon";
import { Moon, Sun } from "lucide-react";
import { useAppTheme } from "~/hooks/useAppTheme";

export const AppHeader = () => {
  const { myUserInfo } = useMyUserInfo();
  const { isDarkMode, toggleTheme } = useAppTheme();

  const setIsProfileModalOpen = useSetAtom(isProfileModalOpenAtom);

  return (
    <div className="h-[75px] border-b border-foreground-100 px-4">
      {myUserInfo ? (
        <div className="flex h-full items-center justify-between">
          <div
            className="flex cursor-pointer items-center gap-2"
            onClick={() => {
              setIsProfileModalOpen(true);
            }}
          >
            <UserAvatar />
            <div className="flex flex-col justify-center gap-1">
              <div className="font-bold">{myUserInfo.name}</div>
              <div className="text-xs text-foreground-400">
                LV 6 - 今日已学习0小时
              </div>
            </div>
          </div>
          <SettingButton />
        </div>
      ) : (
        <div className="flex h-full items-center justify-between">
          <SignInButton />
          <Button variant="light" isIconOnly onPress={toggleTheme}>
            <LuIcon icon={isDarkMode ? Moon : Sun} />
          </Button>
        </div>
      )}
    </div>
  );
};
