import { useState } from "react";
import CopyIcon from "../components/icons/CopyIcon";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";

function About() {
  const [mailModalOpen, setMailModalOpen] = useState(false);

  const mail = "yonnonline@gmail.com";
  const phone = "010-9317-8130";
  const github = "https://github.com/yonnonline";

  // 복사하기
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert("복사하였습니다.");
  };

  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="w-full min-h-80 max-w-xl bg-secondary rounded-lg border border-border p-2 text-center">
        {/* About */}
        <section>
          <h2 className="font-inter font-semibold">About</h2>
          <p>안녕하세요. 권영원입니다.</p>
        </section>
        {/* Contact */}
        <section className="border-t">
          <h2 className="font-inter font-semibold">Contact</h2>
          <ul>
            {/* Mail */}
            <li className="flex items-center">
              <span>
                <svg
                  width="24px"
                  height="24px"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  color="#000000"
                >
                  <path
                    d="M7 9L12 12.5L17 9"
                    stroke="#000000"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M2 17V7C2 5.89543 2.89543 5 4 5H20C21.1046 5 22 5.89543 22 7V17C22 18.1046 21.1046 19 20 19H4C2.89543 19 2 18.1046 2 17Z"
                    stroke="#000000"
                    strokeWidth="1.5"
                  ></path>
                </svg>
              </span>
              <button onClick={() => setMailModalOpen(true)}>{mail}</button>
              <button onClick={() => copyToClipboard(mail)}>
                <CopyIcon />
              </button>
            </li>
            {/* Phone */}
            <li className="flex items-center">
              <span>
                <svg
                  width="24px"
                  height="24px"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  color="#000000"
                >
                  <path
                    d="M18.1182 14.702L14 15.5C11.2183 14.1038 9.5 12.5 8.5 10L9.26995 5.8699L7.81452 2L4.0636 2C2.93605 2 2.04814 2.93178 2.21654 4.04668C2.63695 6.83 3.87653 11.8765 7.5 15.5C11.3052 19.3052 16.7857 20.9564 19.802 21.6127C20.9668 21.8662 22 20.9575 22 19.7655L22 16.1812L18.1182 14.702Z"
                    stroke="#000000"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </span>
              <a href={`tel:${phone.replace(/-/g, "")}`}>{phone}</a>
              <button onClick={() => copyToClipboard(phone)}>
                <CopyIcon />
              </button>
            </li>
            {/* Github */}
            <li className="flex items-center">
              <span>
                <svg
                  width="24px"
                  height="24px"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  color="#000000"
                >
                  <path
                    d="M16 22.0268V19.1568C16.0375 18.68 15.9731 18.2006 15.811 17.7506C15.6489 17.3006 15.3929 16.8902 15.06 16.5468C18.2 16.1968 21.5 15.0068 21.5 9.54679C21.4997 8.15062 20.9627 6.80799 20 5.79679C20.4558 4.5753 20.4236 3.22514 19.91 2.02679C19.91 2.02679 18.73 1.67679 16 3.50679C13.708 2.88561 11.292 2.88561 8.99999 3.50679C6.26999 1.67679 5.08999 2.02679 5.08999 2.02679C4.57636 3.22514 4.54413 4.5753 4.99999 5.79679C4.03011 6.81549 3.49251 8.17026 3.49999 9.57679C3.49999 14.9968 6.79998 16.1868 9.93998 16.5768C9.61098 16.9168 9.35725 17.3222 9.19529 17.7667C9.03334 18.2112 8.96679 18.6849 8.99999 19.1568V22.0268"
                    stroke="#000000"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M9 20.0267C6 20.9999 3.5 20.0267 2 17.0267"
                    stroke="#000000"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </span>
              <a href={github} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </li>
          </ul>
        </section>

        {/* Mail Modal */}
        {mailModalOpen && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="flex flex-col text-sm bg-white p-2 rounded shadow-lg max-w-sm w-full">
              <div className="text-center relative">
                <div className="text-base font-semibold">Send Mail</div>
                <button
                  className="absolute top-0 right-0"
                  type="button"
                  onClick={() => setMailModalOpen(false)}
                >
                  <svg
                    width="20px"
                    height="20px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    color="#000000"
                    strokeWidth="1.5"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM9.70164 8.64124C9.40875 8.34835 8.93388 8.34835 8.64098 8.64124C8.34809 8.93414 8.34809 9.40901 8.64098 9.7019L10.9391 12L8.64098 14.2981C8.34809 14.591 8.34809 15.0659 8.64098 15.3588C8.93388 15.6517 9.40875 15.6517 9.70164 15.3588L11.9997 13.0607L14.2978 15.3588C14.5907 15.6517 15.0656 15.6517 15.3585 15.3588C15.6514 15.0659 15.6514 14.591 15.3585 14.2981L13.0604 12L15.3585 9.7019C15.6514 9.40901 15.6514 8.93414 15.3585 8.64124C15.0656 8.34835 14.5907 8.34835 14.2978 8.64124L11.9997 10.9393L9.70164 8.64124Z"
                      className="fill-gray-400"
                    ></path>
                  </svg>
                </button>
              </div>
              <hr />
              <div className="flex items-center text-gray-400">
                <label htmlFor="sender">Name:&nbsp;</label>
                <Input
                  className="px-0 border-none flex-1"
                  type="text"
                  name="sender"
                  placeholder="(enter your name)..."
                />
              </div>
              <hr />
              <div className="flex items-center text-gray-400">
                <label htmlFor="email">Mail:&nbsp;</label>
                <Input
                  className="px-0 border-none flex-1"
                  type="email"
                  name="email"
                  autoComplete="email"
                  placeholder="(enter your email address)..."
                />
              </div>
              <hr />
              <textarea
                name="message"
                type="text"
                placeholder="Write your message..."
                rows="1"
                resize="false"
                className="w-full py-1 resize-none min-h-32"
              />
              <hr />
              <div className="flex justify-end gap-2 mt-4">
                <Button
                  onClick={() => setMailModalOpen(false)}
                  variant="secondary"
                >
                  Cancel
                </Button>
                <Button type="submit">Send</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default About;
