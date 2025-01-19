import React from "react";
import { getAssetPath } from "../utils/path";

const FooterComponent: React.FC = () => {
  return (
    <footer>
      <div className="flex bg-[rgba(255, 255, 255, 1)] my-[36px]">
        <div className="container mx-auto flex gap-[32px] max-lg:flex-wrap max-lg:gap-[16px]">
          <div className="basis-1/2 max-lg:basis-full">
            <div className="flex gap-[8px] items-center mb-[16px] max-lg:mx-[10px]">
              <img
                className="h-[40px]"
                src={getAssetPath("/main-logo.png")}
                alt="logo"
              />
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.5424 8.45693C23.0217 7.93623 22.1775 7.93623 21.6568 8.45693L15.9994 14.1143L10.343 8.45792C9.82234 7.93722 8.97812 7.93722 8.45742 8.45792C7.93672 8.97862 7.93672 9.82284 8.45742 10.3435L14.1138 15.9999L8.45746 21.6563C7.93676 22.177 7.93676 23.0212 8.45746 23.5419C8.97816 24.0626 9.82238 24.0626 10.3431 23.5419L15.9994 17.8855L21.6567 23.5429C22.1774 24.0636 23.0217 24.0636 23.5424 23.5429C24.0631 23.0222 24.0631 22.1779 23.5424 21.6572L17.885 15.9999L23.5424 10.3425C24.0631 9.82185 24.0631 8.97763 23.5424 8.45693Z"
                  fill="#C3C9D1"
                />
              </svg>
              <img
                className="h-[40px]"
                src={getAssetPath("/gmobile-logo.png")}
                alt="gmobile-logo"
              />
            </div>
            <div className="flex gap-[12px] mb-[16px] max-lg:mx-[10px]">
              <svg
                className="cursor-pointer"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803ZM14 7C14 6.44772 13.5523 6 13 6C12.4477 6 12 6.44772 12 7V14.4998V14.5C11.9999 15.3283 11.3284 15.9998 10.5 15.9998C9.67157 15.9998 9 15.3282 9 14.4998C9 13.7753 9.51468 13.1687 10.1989 13.0298C10.7402 12.92 11.0899 12.3921 10.98 11.8509C10.8701 11.3096 10.3423 10.9599 9.80107 11.0698C8.20308 11.3942 7 12.8054 7 14.4998C7 16.4328 8.567 17.9998 10.5 17.9998C12.4329 17.9998 13.9999 16.4329 14 14.5V14.4998V10.4649C14.5883 10.8052 15.2714 11 16 11C16.5523 11 17 10.5523 17 10C17 9.44772 16.5523 9 16 9C14.8954 9 14 8.10457 14 7Z"
                  fill="#A2ABB8"
                />
              </svg>
              <svg
                className="cursor-pointer"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5.58971 4.20941C3.72849 4.33555 2.29215 5.81694 2.1711 7.6785C2.08072 9.06851 2 10.6796 2 12C2 13.3204 2.08072 14.9315 2.1711 16.3215C2.29215 18.1831 3.72849 19.6645 5.58971 19.7906C7.21433 19.9007 9.40027 20 12 20C14.5997 20 16.7857 19.9007 18.4103 19.7906C20.2715 19.6645 21.7078 18.1831 21.8289 16.3215C21.9193 14.9315 22 13.3204 22 12C22 10.6796 21.9193 9.06851 21.8289 7.6785C21.7078 5.81694 20.2715 4.33555 18.4103 4.20941C16.7857 4.09931 14.5997 4 12 4C9.40027 4 7.21433 4.09931 5.58971 4.20941ZM11.5521 9.16779C10.8873 8.72764 10 9.20432 10 10.0016V13.9987C10 14.7959 10.8873 15.2726 11.552 14.8325L14.5454 12.8507C15.1546 12.4474 15.1547 11.5531 14.5455 11.1498L11.5521 9.16779Z"
                  fill="#A2ABB8"
                />
              </svg>
              <svg
                className="cursor-pointer"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M22 12C22 16.9964 18.3357 21.1369 13.5479 21.8809C13.2558 21.9263 13 21.6942 13 21.3985V14H15C15.5523 14 16 13.5523 16 13C16 12.4477 15.5523 12 15 12H13V10C13 9.44772 13.4477 9 14 9H15C15.5523 9 16 8.55228 16 8C16 7.44772 15.5523 7 15 7H14C12.3431 7 11 8.34315 11 10V12H10C9.44772 12 9 12.4477 9 13C9 13.5523 9.44772 14 10 14H11V21.3985C11 21.6942 10.7442 21.9263 10.4521 21.8809C5.66427 21.1369 2 16.9964 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                  fill="#A2ABB8"
                />
              </svg>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM14.4393 8.89109C14.7784 8.89109 15.0532 9.16592 15.0532 9.50495V14.495C15.0532 14.8341 14.7784 15.1089 14.4393 15.1089C14.1003 15.1089 13.8255 14.8341 13.8255 14.495L13.8255 9.50495C13.8255 9.16592 14.1003 8.89109 14.4393 8.89109ZM4.47895 9.58416C4.47895 9.24513 4.75379 8.9703 5.09281 8.9703H8.53836C8.5985 8.9703 8.65661 8.97894 8.71154 8.99506C8.79223 9.01603 8.87021 9.05293 8.94081 9.10642C9.22752 9.32364 9.28384 9.73215 9.06662 10.0189L6.20032 13.802H8.69677C9.0358 13.802 9.31064 14.0768 9.31064 14.4158C9.31064 14.7549 9.0358 15.0297 8.69677 15.0297H4.9344C4.75446 15.0297 4.5926 14.9523 4.48032 14.8289C4.26017 14.6021 4.23244 14.2423 4.42924 13.9826L7.29663 10.198H5.09281C4.75379 10.198 4.47895 9.92318 4.47895 9.58416ZM18.3799 12.8713C18.3799 13.4618 17.9364 13.8416 17.5087 13.8416C17.0809 13.8416 16.6374 13.4618 16.6374 12.8713C16.6374 12.2807 17.0809 11.901 17.5087 11.901C17.9364 11.901 18.3799 12.2807 18.3799 12.8713ZM19.6473 12.8713C19.6473 14.1071 18.6898 15.1089 17.5087 15.1089C16.3275 15.1089 15.37 14.1071 15.37 12.8713C15.37 11.6355 16.3275 10.6337 17.5087 10.6337C18.6898 10.6337 19.6473 11.6355 19.6473 12.8713ZM12.1621 12.8713C12.1621 13.4618 11.7186 13.8416 11.2908 13.8416C10.8631 13.8416 10.4195 13.4618 10.4195 12.8713C10.4195 12.2807 10.8631 11.901 11.2908 11.901C11.7186 11.901 12.1621 12.2807 12.1621 12.8713ZM12.3366 14.8236C12.0274 15.0053 11.6707 15.1089 11.2908 15.1089C10.1097 15.1089 9.15222 14.1071 9.15222 12.8713C9.15222 11.6355 10.1097 10.6337 11.2908 10.6337C11.6962 10.6337 12.0752 10.7517 12.3983 10.9566C12.5106 10.8314 12.6738 10.7526 12.8553 10.7526C13.1943 10.7526 13.4692 11.0274 13.4692 11.3665V14.4952C13.4692 14.8342 13.1943 15.109 12.8553 15.109C12.6371 15.109 12.4455 14.9952 12.3366 14.8236Z"
                  fill="#A2ABB8"
                />
              </svg>
            </div>
            <div className="copyright max-lg:mx-[10px]">
              Copyright © 2024 | HealthAct. All rights reserved.
            </div>
          </div>
          <div>
            <div className="contact mb-[12px] max-lg:mb-[8px]">Liên hệ</div>
            <div className="sub-contact mb-[16px] max-lg:mb-[8px]">
              Mọi phản ánh thắc mắc về chất lượng dịch vụ xin vui lòng liên hệ
              về đường dây nóng
            </div>
            <div className="support-line flex gap-[10px] mb-[16px] items-center max-lg:mb-[8px]">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.164024 3.68444C0.369786 2.49107 1.05138 1.53379 1.78556 0.799621C2.95862 -0.37341 4.89903 -0.233982 5.89233 1.0947L7.5138 3.26366C8.40666 4.458 8.28676 6.12684 7.23233 7.18126L7.12117 7.29243C6.73064 7.68295 6.73064 8.31612 7.12117 8.70664L9.29274 10.8782C9.68326 11.2687 10.3164 11.2687 10.707 10.8782L10.8181 10.767C11.8725 9.71262 13.5414 9.59271 14.7357 10.4856L16.921 12.1192C18.2411 13.1061 18.3796 15.034 17.2142 16.1994C16.4718 16.9418 15.5041 17.6345 14.2961 17.843C12.072 18.227 7.80915 18.2231 3.79274 14.2066C-0.225532 10.1884 -0.218506 5.90302 0.164024 3.68444ZM3.19976 2.21385C2.62364 2.78996 2.24404 3.39155 2.13494 4.02427C1.82646 5.81341 1.78118 9.36665 5.20695 12.7924C8.63434 16.2198 12.1677 16.1809 13.9558 15.8722C14.6007 15.7608 15.2127 15.3725 15.8 14.7852C16.1039 14.4813 16.0678 13.9785 15.7235 13.7211L13.5382 12.0874C13.1401 11.7898 12.5838 11.8298 12.2323 12.1813L12.1212 12.2924C10.9496 13.464 9.0501 13.464 7.87852 12.2924L5.70695 10.1209C4.53538 8.94928 4.53538 7.04979 5.70695 5.87821L5.81812 5.76705C6.16959 5.41557 6.20956 4.85929 5.91194 4.46118L4.29047 2.29222C4.02666 1.93934 3.51131 1.90231 3.19976 2.21385Z"
                  fill="black"
                />
              </svg>
              <a href="tel:19008699" className="support-value">
                19008699
              </a>
            </div>
            <div className="support-line flex gap-[10px] items-center max-lg:mb-[8px]">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.7587 4H16.2413C17.0463 3.99999 17.7106 3.99998 18.2518 4.04419C18.8139 4.09012 19.3306 4.18868 19.816 4.43597C20.5686 4.81947 21.1805 5.43139 21.564 6.18404C21.8113 6.66937 21.9099 7.18608 21.9558 7.74817C22 8.28936 22 8.95372 22 9.75868V14.2413C22 15.0463 22 15.7106 21.9558 16.2518C21.9099 16.8139 21.8113 17.3306 21.564 17.816C21.1805 18.5686 20.5686 19.1805 19.816 19.564C19.3306 19.8113 18.8139 19.9099 18.2518 19.9558C17.7106 20 17.0463 20 16.2413 20H7.75872C6.95374 20 6.28938 20 5.74817 19.9558C5.18608 19.9099 4.66937 19.8113 4.18404 19.564C3.43139 19.1805 2.81947 18.5686 2.43597 17.816C2.18868 17.3306 2.09012 16.8139 2.04419 16.2518C1.99998 15.7106 1.99999 15.0463 2 14.2413V9.7587C1.99999 8.95373 1.99998 8.28937 2.04419 7.74818C2.09012 7.18608 2.18868 6.66937 2.43597 6.18404C2.81947 5.43139 3.43139 4.81947 4.18404 4.43597C4.66937 4.18868 5.18608 4.09012 5.74817 4.04419C6.28937 3.99998 6.95373 3.99999 7.7587 4ZM5.91104 6.03755C5.47262 6.07337 5.24842 6.1383 5.09202 6.21799C4.7157 6.40973 4.40973 6.7157 4.21799 7.09202C4.1383 7.24842 4.07337 7.47262 4.03755 7.91104C4.00078 8.36113 4 8.94342 4 9.8V14.2C4 15.0566 4.00078 15.6389 4.03755 16.089C4.07337 16.5274 4.1383 16.7516 4.21799 16.908C4.40973 17.2843 4.7157 17.5903 5.09202 17.782C5.24842 17.8617 5.47262 17.9266 5.91104 17.9624C6.36113 17.9992 6.94342 18 7.8 18H16.2C17.0566 18 17.6389 17.9992 18.089 17.9624C18.5274 17.9266 18.7516 17.8617 18.908 17.782C19.2843 17.5903 19.5903 17.2843 19.782 16.908C19.8617 16.7516 19.9266 16.5274 19.9624 16.089C19.9992 15.6389 20 15.0566 20 14.2V9.8C20 8.94342 19.9992 8.36113 19.9624 7.91104C19.9266 7.47262 19.8617 7.24842 19.782 7.09202C19.5903 6.7157 19.2843 6.40973 18.908 6.21799C18.7516 6.1383 18.5274 6.07337 18.089 6.03755C17.6389 6.00078 17.0566 6 16.2 6H7.8C6.94342 6 6.36113 6.00078 5.91104 6.03755Z"
                  fill="black"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M6.17548 8.43441C6.4879 7.97898 7.11036 7.86305 7.56578 8.17548L11.4344 10.8293C11.7753 11.0632 12.2249 11.0632 12.5658 10.8294L16.4344 8.17548C16.8898 7.86305 17.5123 7.97898 17.8247 8.43441C18.1371 8.88983 18.0212 9.51229 17.5658 9.82471L13.6972 12.4786C12.6745 13.1801 11.3257 13.1801 10.303 12.4786L6.43441 9.82471C5.97898 9.51229 5.86305 8.88983 6.17548 8.43441Z"
                  fill="black"
                />
              </svg>
              <a href="mailto:support@simplus.vn" className="support-value">
                support@simplus.vn
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-[#f7f8fb]">
        <div className="container mx-auto py-[24px]">
          <div className="company-text mb-[16px]">Công ty TNHH Simplus</div>
          <div className="flex gap-[80px] mb-[8px]">
            <div className="information-line">
              <span className="key-text">
                Số giấy chứng nhận đăng ký kinh doanh:
              </span>
              <span className="value-text">0121240250358384</span>
            </div>
            <div className="information-line max-lg:hidden">
              <span className="key-text">Địa chỉ:</span>
              <span className="value-text">
                157 Phố Đặng Tiến Đồng, Phường Trung Liệt, Quận Đống Đa, Hà Nội
              </span>
            </div>
          </div>
          <div className="information-line">
            <span className="key-text">Ngày cấp:</span>
            <span className="value-text">
              20/03/2015 do Sở KHĐT TP. Hà Nội cấp
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
