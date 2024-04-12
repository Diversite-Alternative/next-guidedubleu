import { useRouter } from 'next/router';
import { useConfig } from 'nextra-theme-docs';

export default {
  logo: (
    <>
      {/* <svg width="24" height="24" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M14.683 14.828a4.055 4.055 0 0 1-1.272.858a4.002 4.002 0 0 1-4.875-1.45l-1.658 1.119a6.063 6.063 0 0 0 1.621 1.62a5.963 5.963 0 0 0 2.148.903a6.035 6.035 0 0 0 3.542-.35a6.048 6.048 0 0 0 1.907-1.284c.272-.271.52-.571.734-.889l-1.658-1.119a4.147 4.147 0 0 1-.489.592z M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10s10-4.486 10-10S17.514 2 12 2zm0 2c2.953 0 5.531 1.613 6.918 4H5.082C6.469 5.613 9.047 4 12 4zm0 16c-4.411 0-8-3.589-8-8c0-.691.098-1.359.264-2H5v1a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2h2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-1h.736c.166.641.264 1.309.264 2c0 4.411-3.589 8-8 8z"
        />
      </svg> */}
      <svg width="105" height="30" viewBox="0 0 175 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M79.2 22C78.8833 21.4167 78.425 20.975 77.825 20.675C77.2417 20.3583 76.55 20.2 75.75 20.2C74.3667 20.2 73.2583 20.6583 72.425 21.575C71.5917 22.475 71.175 23.6833 71.175 25.2C71.175 26.8167 71.6083 28.0833 72.475 29C73.3583 29.9 74.5667 30.35 76.1 30.35C77.15 30.35 78.0333 30.0833 78.75 29.55C79.4833 29.0167 80.0167 28.25 80.35 27.25H74.925V24.1H84.225V28.075C83.9083 29.1417 83.3667 30.1333 82.6 31.05C81.85 31.9667 80.8917 32.7083 79.725 33.275C78.5583 33.8417 77.2417 34.125 75.775 34.125C74.0417 34.125 72.4917 33.75 71.125 33C69.775 32.2333 68.7167 31.175 67.95 29.825C67.2 28.475 66.825 26.9333 66.825 25.2C66.825 23.4667 67.2 21.925 67.95 20.575C68.7167 19.2083 69.775 18.15 71.125 17.4C72.475 16.6333 74.0167 16.25 75.75 16.25C77.85 16.25 79.6167 16.7583 81.05 17.775C82.5 18.7917 83.4583 20.2 83.925 22H79.2ZM95.668 16.45C97.518 16.45 99.1346 16.8167 100.518 17.55C101.901 18.2833 102.968 19.3167 103.718 20.65C104.485 21.9667 104.868 23.4917 104.868 25.225C104.868 26.9417 104.485 28.4667 103.718 29.8C102.968 31.1333 101.893 32.1667 100.493 32.9C99.1096 33.6333 97.5013 34 95.668 34H89.093V16.45H95.668ZM95.393 30.3C97.0096 30.3 98.268 29.8583 99.168 28.975C100.068 28.0917 100.518 26.8417 100.518 25.225C100.518 23.6083 100.068 22.35 99.168 21.45C98.268 20.55 97.0096 20.1 95.393 20.1H93.368V30.3H95.393ZM120.382 25C121.399 25.2167 122.215 25.725 122.832 26.525C123.449 27.3083 123.757 28.2083 123.757 29.225C123.757 30.6917 123.24 31.8583 122.207 32.725C121.19 33.575 119.765 34 117.932 34H109.757V16.45H117.657C119.44 16.45 120.832 16.8583 121.832 17.675C122.849 18.4917 123.357 19.6 123.357 21C123.357 22.0333 123.082 22.8917 122.532 23.575C121.999 24.2583 121.282 24.7333 120.382 25ZM114.032 23.55H116.832C117.532 23.55 118.065 23.4 118.432 23.1C118.815 22.7833 119.007 22.325 119.007 21.725C119.007 21.125 118.815 20.6667 118.432 20.35C118.065 20.0333 117.532 19.875 116.832 19.875H114.032V23.55ZM117.182 30.55C117.899 30.55 118.449 30.3917 118.832 30.075C119.232 29.7417 119.432 29.2667 119.432 28.65C119.432 28.0333 119.224 27.55 118.807 27.2C118.407 26.85 117.849 26.675 117.132 26.675H114.032V30.55H117.182Z" fill="#C9650D"/>
          <rect width="50" height="50" rx="10" fill="#C9650D"/>
          <path d="M37.0781 23.1367V34.4062C36.6354 34.9401 35.9518 35.5195 35.0273 36.1445C34.1029 36.7565 32.9115 37.2839 31.4531 37.7266C29.9948 38.1693 28.2305 38.3906 26.1602 38.3906C24.3242 38.3906 22.651 38.0911 21.1406 37.4922C19.6302 36.8802 18.3281 35.9883 17.2344 34.8164C16.1536 33.6445 15.3203 32.2122 14.7344 30.5195C14.1484 28.8138 13.8555 26.8672 13.8555 24.6797V22.9023C13.8555 20.7148 14.1354 18.7682 14.6953 17.0625C15.2682 15.3568 16.082 13.918 17.1367 12.7461C18.1914 11.5742 19.4479 10.6823 20.9062 10.0703C22.3646 9.45833 23.9857 9.15234 25.7695 9.15234C28.2435 9.15234 30.2747 9.55599 31.8633 10.3633C33.4518 11.1576 34.6628 12.2643 35.4961 13.6836C36.3424 15.0898 36.8633 16.7044 37.0586 18.5273H31.375C31.2318 17.5638 30.9583 16.724 30.5547 16.0078C30.151 15.2917 29.5716 14.7318 28.8164 14.3281C28.0742 13.9245 27.1107 13.7227 25.9258 13.7227C24.9492 13.7227 24.0768 13.9245 23.3086 14.3281C22.5534 14.7188 21.9154 15.2982 21.3945 16.0664C20.8737 16.8346 20.4766 17.7852 20.2031 18.918C19.9297 20.0508 19.793 21.3659 19.793 22.8633V24.6797C19.793 26.1641 19.9362 27.4792 20.2227 28.625C20.5091 29.7578 20.9323 30.7148 21.4922 31.4961C22.0651 32.2643 22.7682 32.8438 23.6016 33.2344C24.4349 33.625 25.4049 33.8203 26.5117 33.8203C27.4362 33.8203 28.2044 33.7422 28.8164 33.5859C29.4414 33.4297 29.9427 33.2409 30.3203 33.0195C30.7109 32.7852 31.0104 32.5638 31.2188 32.3555V27.3164H25.8672V23.1367H37.0781Z" fill="white"/>
      </svg> 
      <span style={{ marginLeft: '.4em', fontWeight: 800 }}>
        {/* Guide du Bleu */}
      </span>
    </>
  ),
  
  project: {
    link: 'https://diversitealternative.org/'
  },
  head: () => {
    const { asPath, defaultLocale, locale } = useRouter();
    const { frontMatter } = useConfig();
    const url =
      'https://my-app.com' +
      (defaultLocale === locale ? asPath : `/${locale}${asPath}`);

    return (
      <>
        <meta property="og:url" content={url} />
        <meta property="og:title" content={frontMatter.title || 'GDB'} />
        <meta
          property="og:description"
          content={frontMatter.description || 'Le guide de référence pour les primo arrivant en France'}
        />
      </>
    );
  },
  banner: {
    key: '2.0-release',
    text: (
      <a href="https://diversitealternative.org/" target="_blank">
        🎉 v4.0 is released. Read more →
      </a>
    )
  },
  chat: {
    link: 'https://diversitealternative.org/',
    icon: (
      <svg width="24" height="24" viewBox="0 0 248 204">
        <path
          fill="currentColor"
          d="M221.95 51.29c.15 2.17.15 4.34.15 6.53 0 66.73-50.8 143.69-143.69 143.69v-.04c-27.44.04-54.31-7.82-77.41-22.64 3.99.48 8 .72 12.02.73 22.74.02 44.83-7.61 62.72-21.66-21.61-.41-40.56-14.5-47.18-35.07a50.338 50.338 0 0 0 22.8-.87C27.8 117.2 10.85 96.5 10.85 72.46v-.64a50.18 50.18 0 0 0 22.92 6.32C11.58 63.31 4.74 33.79 18.14 10.71a143.333 143.333 0 0 0 104.08 52.76 50.532 50.532 0 0 1 14.61-48.25c20.34-19.12 52.33-18.14 71.45 2.19 11.31-2.23 22.15-6.38 32.07-12.26a50.69 50.69 0 0 1-22.2 27.93c10.01-1.18 19.79-3.86 29-7.95a102.594 102.594 0 0 1-25.2 26.16z"
        />
      </svg>
    )
  },
  docsRepositoryBase: "https://github.com/Diversite-Alternative/next-guidedubleu",
  sidebar: {
    titleComponent({ title, type }) {
      if (type === 'separator') {
        return (
          <div style={{ background: 'cyan', textAlign: 'center' }}>{title}</div>
        );
      }
      if (title === 'About') {
        return <>❓ {title}</>;
      }
      return <> {title}</>;
    }
  },
  footer: {
    text: (
      <span>
        Diversité Alternative {new Date().getFullYear()} ©{' '}
        <a href="https://diversitealternative.org/" target="_blank">
          GDB
        </a>
        .
      </span>
    )
  }
};
