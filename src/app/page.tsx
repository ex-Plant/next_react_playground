import { ClientWrapper } from "@/app/components/1_client_server/ClientWrapper";
import { ServerComponent } from "@/app/components/1_client_server/ServerComponent";
import { ClientComponent } from "@/app/components/1_client_server/ClientComponent";
import { CommonReactMistakes } from "@/components/3_common_react_mistakes/CommonReactMistakes";
import { FramerMotionNavBar } from "@/components/4_framer_motion/FramerMotionNavBar";
import Zod from "@/components/8_zod/Component";
import Cache from "@/components/9_unstable_cache/Cache";
import ServerOnly from "@/components/10_server_only/Component";

export default function Home() {
  return (
    <div className={`flex flex-col`}>
      {/*<ClientWrapper>*/}
      {/*  <ServerComponent txt={`I am a server component 🚀`} />*/}
      {/*</ClientWrapper>*/}
      {/*<ClientComponent />*/}
      {/*<CommonReactMistakes />*/}
      {/*<Zod />*/}
      <ServerOnly />
    </div>
  );
}
