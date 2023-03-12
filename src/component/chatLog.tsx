import { ChatLogInfo } from "@/type/chatLogInfo";

type Props = {
  messageLog?: ChatLogInfo[];
};

export const ChatLog = (props: Props) => {
  const { messageLog } = props;
  return (
    <div className="scroll">
      {messageLog &&
        messageLog.map((item) => {
          return (
            <>
              <div className={item.position}>
                <div className="faceicon">
                  <img src={item.img} />
                </div>
                <div className="says">
                  <p>{item.msg}</p>
                </div>
              </div>
            </>
          );
        })}
    </div>
  );
};
