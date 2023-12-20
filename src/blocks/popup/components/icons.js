const icons = {
    logo: <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 0.5H7.97375C6.6 0.5 5.5 1.6 5.5 2.975V13C5.5 14.375 6.625 15.5 8 15.5H18C19.375 15.5 20.5 14.375 20.5 13V3C20.5 1.625 19.375 0.5 18 0.5ZM18 13H8V3H18V13ZM3 10.5H0.5V18C0.5 19.375 1.625 20.5 3 20.5H10.5V18H3V10.5Z" fill="#FE6E5A" /></svg>,

    preset1: <svg width="51" height="34" viewBox="0 0 51 34" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="1" y="0.5" width="49" height="33" rx="1.5" fill="white" stroke="#FE6E5A" />
        <g clipPath="url(#clip0_811_251)">
            <path fillRule="evenodd" clipRule="evenodd" d="M25 7.625C25.1477 7.625 25.294 7.5959 25.4305 7.53936C25.567 7.48283 25.691 7.39996 25.7955 7.2955C25.9 7.19103 25.9828 7.06701 26.0394 6.93052C26.0959 6.79403 26.125 6.64774 26.125 6.5C26.125 6.35226 26.0959 6.20597 26.0394 6.06948C25.9828 5.93299 25.9 5.80897 25.7955 5.7045C25.691 5.60004 25.567 5.51717 25.4305 5.46064C25.294 5.4041 25.1477 5.375 25 5.375C24.7016 5.375 24.4155 5.49353 24.2045 5.7045C23.9935 5.91548 23.875 6.20163 23.875 6.5C23.875 6.79837 23.9935 7.08452 24.2045 7.2955C24.4155 7.50647 24.7016 7.625 25 7.625ZM24.971 6.955L25.596 6.205L25.404 6.045L24.8665 6.68988L24.5884 6.41163L24.4116 6.58837L24.7866 6.96337L24.8834 7.06013L24.971 6.955Z" fill="#FE6E5A" />
        </g>
        <line x1="11.5" y1="10.5" x2="39.5" y2="10.5" stroke="#FE6E5A" />
        <line x1="7.5" y1="15.75" x2="43.5" y2="15.75" stroke="#FF9B8D" strokeWidth="0.5" />
        <line x1="10.5" y1="17.75" x2="40.5" y2="17.75" stroke="#FF9B8D" strokeWidth="0.5" />
        <line x1="20.5" y1="19.75" x2="30.5" y2="19.75" stroke="#FF9B8D" strokeWidth="0.5" />
        <rect x="17.5" y="25" width="16" height="4" fill="#FE6E5A" />
        <defs>
            <clipPath id="clip0_811_251">
                <rect width="3" height="3" fill="white" transform="translate(23.5 5)" />
            </clipPath>
        </defs>
    </svg>,

    preset2: <svg width="51" height="34" viewBox="0 0 51 34" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="1" y="0.5" width="49" height="33" rx="1.5" fill="white" stroke="#FE6E5A" />
        <line x1="5.5" y1="9" x2="16.5" y2="9" stroke="#FE6E5A" />
        <line x1="5.5" y1="13.25" x2="25.5" y2="13.25" stroke="#FE6E5A" strokeWidth="0.5" />
        <line x1="5.5" y1="15.25" x2="25.5" y2="15.25" stroke="#FE6E5A" strokeWidth="0.5" />
        <line x1="5.5" y1="17.25" x2="18.5" y2="17.25" stroke="#FE6E5A" strokeWidth="0.5" />
        <rect x="5.5" y="20.5" width="16" height="4" fill="#FE6E5A" />
        <path d="M44.25 17V11.75C44.25 11.3522 44.092 10.9706 43.8107 10.6893C43.5294 10.408 43.1478 10.25 42.75 10.25H32.25C31.8522 10.25 31.4706 10.408 31.1893 10.6893C30.908 10.9706 30.75 11.3522 30.75 11.75V20M44.25 17V22.25C44.25 22.6478 44.092 23.0294 43.8107 23.3107C43.5294 23.592 43.1478 23.75 42.75 23.75H40.5M44.25 17C39.4185 17 36.6712 18.4888 35.2087 20.1823M30.75 20V22.25C30.75 22.6478 30.908 23.0294 31.1893 23.3107C31.4706 23.592 31.8522 23.75 32.25 23.75H40.5M30.75 20C31.8022 19.8245 33.4777 19.7803 35.2087 20.1823M40.5 23.75C39.222 21.674 37.1797 20.639 35.2087 20.1823M34.875 13.25C34.5 13.25 33.75 13.475 33.75 14.375C33.75 15.275 34.5 15.5 34.875 15.5C35.25 15.5 36 15.275 36 14.375C36 13.475 35.25 13.25 34.875 13.25Z" stroke="#FE6E5A" strokeLinecap="round" strokeLinejoin="round" />
    </svg>,

    custom: <svg width="50" height="34" viewBox="0 0 50 34" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0.5" y="0.5" width="49" height="33" rx="1.5" fill="white" stroke="#FE6E5A" strokeDasharray="5 5" />
        <path d="M29.5 17.7485H25.75V21.4985C25.75 21.6974 25.671 21.8882 25.5303 22.0289C25.3897 22.1695 25.1989 22.2485 25 22.2485C24.8011 22.2485 24.6103 22.1695 24.4697 22.0289C24.329 21.8882 24.25 21.6974 24.25 21.4985V17.7485H20.5C20.3011 17.7485 20.1103 17.6695 19.9697 17.5289C19.829 17.3882 19.75 17.1974 19.75 16.9985C19.75 16.7996 19.829 16.6089 19.9697 16.4682C20.1103 16.3276 20.3011 16.2485 20.5 16.2485H24.25V12.4985C24.25 12.2996 24.329 12.1089 24.4697 11.9682C24.6103 11.8276 24.8011 11.7485 25 11.7485C25.1989 11.7485 25.3897 11.8276 25.5303 11.9682C25.671 12.1089 25.75 12.2996 25.75 12.4985V16.2485H29.5C29.6989 16.2485 29.8897 16.3276 30.0303 16.4682C30.171 16.6089 30.25 16.7996 30.25 16.9985C30.25 17.1974 30.171 17.3882 30.0303 17.5289C29.8897 17.6695 29.6989 17.7485 29.5 17.7485Z" fill="#FE6E5A" />
    </svg>,
}

export default icons;