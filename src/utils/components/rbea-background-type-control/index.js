import RbeaInlineTabRadioControl from "../rbea-inline-radio-tab-control";

const RbeaBackgroundTypeControl = ({
    label,
    selectedValue,
    onChange,
    options,
  }) => {
  
    // Function to render options with corresponding icons
    let getFixedOptions = (_options) => {
        return _options.map((option) => {
          return {
            label: (
              <div className="responsive-blocks-editor-addons-design-panel-item">
                <div className="responsive-blocks-editor-addons-design-panel-item__svg">
                    {"color" == option.value && <svg className = "rbea-radio-inline-tab-control-icons" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_9_424)">
                        <path d="M5.87166 10.8752C4.46119 10.9659 3.18115 11.5031 2.45482 13.417C2.37221 13.6354 2.17357 13.7679 1.94189 13.7679C1.55131 13.7679 0.343691 12.7951 -0.000488281 12.5603C-0.000136719 15.4554 1.33334 18 4.49986 18C7.16682 18 8.99986 16.4612 8.99986 13.7746C8.99986 13.6652 8.97701 13.5608 8.96576 13.4536L5.87166 10.8752ZM16.0976 0C15.5646 0 15.065 0.235898 14.6839 0.57832C7.49764 6.99785 6.74986 7.14867 6.74986 9.03832C6.74986 9.51996 6.86412 9.9791 7.05678 10.3989L9.30045 12.2685C9.55393 12.3318 9.81514 12.375 10.0876 12.375C12.2712 12.375 13.5368 10.7764 17.5112 3.35883C17.7706 2.85434 17.9999 2.30941 17.9999 1.74199C17.9999 0.725625 17.0858 0 16.0976 0Z" fill="#666666"/>
                      </g>
                      <defs>
                        <clipPath id="clip0_9_424">
                          <rect width="18" height="18" fill="white"/>
                        </clipPath>
                      </defs>
                      </svg>
                    }
                    {"gradient" == option.value && <svg className = "rbea-radio-inline-tab-control-icons" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="9" cy="9" r="7" stroke="#666666" stroke-width="2"/>
                        <path d="M13.773 4.22703C12.5071 2.96116 10.7902 2.25 9 2.25C7.20979 2.25 5.4929 2.96116 4.22703 4.22703C2.96116 5.4929 2.25 7.20979 2.25 9C2.25 10.7902 2.96116 12.5071 4.22703 13.773L9 9L13.773 4.22703Z" fill="#666666"/>
                      </svg>
                    }
                    {"image" == option.value && <svg className = "rbea-radio-inline-tab-control-image-icon" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M2.40796 2.96237C1.5 4.06872 1.5 5.71246 1.5 8.99995C1.5 12.2874 1.5 13.9312 2.40796 15.0375C2.57418 15.2401 2.75989 15.4258 2.96243 15.592C4.06878 16.4999 5.71252 16.4999 9 16.4999C12.2875 16.4999 13.9312 16.4999 15.0376 15.592C15.2401 15.4258 15.4258 15.2401 15.592 15.0375C16.5 13.9312 16.5 12.2874 16.5 8.99995C16.5 6.55172 16.5 5.0151 16.125 3.93316V12.7499C15.4047 12.7499 14.7139 12.4638 14.2045 11.9545L13.6408 11.3907C13.4303 11.1803 13.3251 11.0751 13.2256 10.9979C12.5043 10.4385 11.4957 10.4385 10.7744 10.9979C10.6749 11.0751 10.5697 11.1803 10.3593 11.3907L10.3592 11.3907L10.2744 11.4756L10.2744 11.4756C10.0702 11.6797 9.96817 11.7818 9.87743 11.84C9.4287 12.128 8.83295 12.0133 8.52327 11.5792C8.46064 11.4914 8.40378 11.3588 8.29005 11.0934L8.25 10.9999C7.95123 10.3028 7.80184 9.95424 7.62182 9.73474C7.01062 8.98947 5.95482 8.78614 5.11055 9.25111C4.86189 9.38805 4.59374 9.65621 4.05742 10.1925L4.05742 10.1925L2.625 11.6249V2.71887C2.54942 2.79701 2.477 2.87824 2.40796 2.96237Z" fill="#666666"/>
                      <path className = "middle-path" d="M3.18097 14.4032L2.41146 15.0347L3.18097 14.4032C2.89744 14.0577 2.70892 13.5851 2.60658 12.7193C2.50164 11.8315 2.5 10.6682 2.5 9C2.5 7.33176 2.50164 6.16851 2.60658 5.28068C2.70892 4.41492 2.89744 3.9423 3.18097 3.59682C3.30563 3.44492 3.44492 3.30563 3.59682 3.18097C3.9423 2.89744 4.41492 2.70892 5.28068 2.60658C6.16851 2.50164 7.33176 2.5 9 2.5C10.6682 2.5 11.8315 2.50164 12.7193 2.60658C13.5851 2.70892 14.0577 2.89744 14.4032 3.18097L15.0262 2.42176L14.4032 3.18097C14.5551 3.30563 14.6944 3.44492 14.819 3.59682C15.1026 3.9423 15.2911 4.41492 15.3934 5.28068C15.4984 6.16851 15.5 7.33176 15.5 9C15.5 10.6682 15.4984 11.8315 15.3934 12.7193C15.2911 13.5851 15.1026 14.0577 14.819 14.4032C14.6944 14.5551 14.5551 14.6944 14.4032 14.819C14.0577 15.1026 13.5851 15.2911 12.7193 15.3934C11.8315 15.4984 10.6682 15.5 9 15.5C7.33176 15.5 6.16851 15.4984 5.28068 15.3934C4.41492 15.2911 3.9423 15.1026 3.59682 14.819C3.44492 14.6944 3.30563 14.5551 3.18097 14.4032Z" stroke="#666666" stroke-width="2"/>
                      <circle cx="11.25" cy="6.75" r="1.5" fill="#666666"/>
                      </svg>
                    }
                    {"video" == option.value && <svg className = "rbea-radio-inline-tab-control-icons" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M9 15.75C12.7279 15.75 15.75 12.7279 15.75 9C15.75 5.27208 12.7279 2.25 9 2.25C5.27208 2.25 2.25 5.27208 2.25 9C2.25 12.7279 5.27208 15.75 9 15.75ZM8.53277 6.24043L11.9265 8.12584C12.6123 8.50685 12.6123 9.49315 11.9265 9.87416L8.53277 11.7596C7.73293 12.2039 6.75 11.6256 6.75 10.7106V7.28942C6.75 6.37444 7.73293 5.79607 8.53277 6.24043Z" fill="#666666"/>
                      </svg>
                    }
                </div>
              </div>
            ),
            value: option.value,
          };
        });
      }
  
    const fixedOptions = getFixedOptions(options);
  
    return (
      <RbeaInlineTabRadioControl
        label={label}
        selectedValue={selectedValue}
        options={fixedOptions}
        onChange={onChange}
      />
    );
  };
  
  export default RbeaBackgroundTypeControl;