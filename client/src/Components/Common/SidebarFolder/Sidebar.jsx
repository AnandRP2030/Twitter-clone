import SidbarItems from "./SidebarItems";
import { Stack, HStack, VStack, Image ,Spacer} from "@chakra-ui/react";
import TweetButton from "../Button/tweetBtn";
import ProfileBox from "../Profile/profileBox";

const SideBar = () => {
  return (
    <VStack ml='2%' h="auto"  pos='fixed' color='#fff'>
      <SidbarItems label={""} />
      <SidbarItems label={"Home"} />
      <SidbarItems label={"Explore"} />
      <SidbarItems label={"Communites"} />
      <SidbarItems label={"Notifications"} />
      <SidbarItems label={"Messages"} />
      <SidbarItems label={"Bookmarks"} />
      <SidbarItems label={"Twitter Blue"} />
      <SidbarItems label={"Profile"} />
      <SidbarItems label={"More"} />

      <TweetButton colorCode={"#f91880"} content={"Tweet"} />
      
      <Spacer/>
      <ProfileBox/>
      
    </VStack>
  );
};
export default SideBar;