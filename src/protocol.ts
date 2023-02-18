import uuid from "uuid";

interface Message {
  id: string;
  namespace: string;
  functionName: string;
  args: any[];
}

function sendMessage(
  namespace: string,
  functionName: string,
  args: any[]
): Promise<Message> {
  const msgID = uuid.v1();
  const req: Message = {
    id: msgID,
    namespace,
    functionName,
    args,
  };

  console.log(req);

  return new Promise((resolve, reject) => {
    process.stdin.addListener("readable", (err, data) => {
      if (err) {
        reject(err);
        return;
      }
      const msg: Message = JSON.parse(data);
      if (msg.id != msgID) return;
      resolve(msg);
      return;
    });
  });
}

export default { sendMessage };
