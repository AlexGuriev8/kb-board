import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { useState } from 'react';

const Logo = () => {
  return (
    <svg width="153" height="26" xmlns="http://www.w3.org/2000/svg">
      <g fill="none" fillRule="evenodd">
        <path
          d="M44.56 25v-5.344l1.92-2.112L50.928 25h5.44l-6.304-10.432 6.336-7.04h-5.92l-5.92 6.304V.776h-4.8V25h4.8Zm19.36.384c2.176 0 3.925-.672 5.248-2.016V25h4.48V13.48c0-1.259-.315-2.363-.944-3.312-.63-.95-1.51-1.69-2.64-2.224-1.13-.533-2.432-.8-3.904-.8-1.856 0-3.483.427-4.88 1.28-1.397.853-2.352 2.005-2.864 3.456l3.84 1.824a4.043 4.043 0 0 1 1.424-1.856c.65-.47 1.403-.704 2.256-.704.896 0 1.605.224 2.128.672.523.448.784 1.003.784 1.664v.48l-4.832.768c-2.09.341-3.648.992-4.672 1.952-1.024.96-1.536 2.176-1.536 3.648 0 1.579.55 2.816 1.648 3.712 1.099.896 2.587 1.344 4.464 1.344Zm.96-3.52c-.597 0-1.099-.15-1.504-.448-.405-.299-.608-.715-.608-1.248 0-.576.181-1.019.544-1.328.363-.31.885-.528 1.568-.656l3.968-.704v.544c0 1.067-.363 1.973-1.088 2.72-.725.747-1.685 1.12-2.88 1.12ZM81.968 25V14.792c0-1.003.299-1.808.896-2.416.597-.608 1.365-.912 2.304-.912.939 0 1.707.304 2.304.912.597.608.896 1.413.896 2.416V25h4.8V13.768c0-1.323-.277-2.48-.832-3.472a5.918 5.918 0 0 0-2.32-2.32c-.992-.555-2.15-.832-3.472-.832-1.11 0-2.09.208-2.944.624a4.27 4.27 0 0 0-1.952 1.904V7.528h-4.48V25h4.8Zm24.16.384c1.707 0 3.232-.405 4.576-1.216a8.828 8.828 0 0 0 3.184-3.296c.779-1.387 1.168-2.923 1.168-4.608 0-1.707-.395-3.248-1.184-4.624a8.988 8.988 0 0 0-3.2-3.28c-1.344-.81-2.848-1.216-4.512-1.216-2.112 0-3.787.619-5.024 1.856V.776h-4.8V25h4.48v-1.664c.619.661 1.392 1.168 2.32 1.52a8.366 8.366 0 0 0 2.992.528Zm-.576-4.32c-1.301 0-2.363-.443-3.184-1.328-.821-.885-1.232-2.043-1.232-3.472 0-1.408.41-2.56 1.232-3.456.821-.896 1.883-1.344 3.184-1.344 1.323 0 2.41.453 3.264 1.36.853.907 1.28 2.053 1.28 3.44 0 1.408-.427 2.56-1.28 3.456-.853.896-1.941 1.344-3.264 1.344Zm17.728 4.32c2.176 0 3.925-.672 5.248-2.016V25h4.48V13.48c0-1.259-.315-2.363-.944-3.312-.63-.95-1.51-1.69-2.64-2.224-1.13-.533-2.432-.8-3.904-.8-1.856 0-3.483.427-4.88 1.28-1.397.853-2.352 2.005-2.864 3.456l3.84 1.824a4.043 4.043 0 0 1 1.424-1.856c.65-.47 1.403-.704 2.256-.704.896 0 1.605.224 2.128.672.523.448.784 1.003.784 1.664v.48l-4.832.768c-2.09.341-3.648.992-4.672 1.952-1.024.96-1.536 2.176-1.536 3.648 0 1.579.55 2.816 1.648 3.712 1.099.896 2.587 1.344 4.464 1.344Zm.96-3.52c-.597 0-1.099-.15-1.504-.448-.405-.299-.608-.715-.608-1.248 0-.576.181-1.019.544-1.328.363-.31.885-.528 1.568-.656l3.968-.704v.544c0 1.067-.363 1.973-1.088 2.72-.725.747-1.685 1.12-2.88 1.12ZM141.328 25V14.792c0-1.003.299-1.808.896-2.416.597-.608 1.365-.912 2.304-.912.939 0 1.707.304 2.304.912.597.608.896 1.413.896 2.416V25h4.8V13.768c0-1.323-.277-2.48-.832-3.472a5.918 5.918 0 0 0-2.32-2.32c-.992-.555-2.15-.832-3.472-.832-1.11 0-2.09.208-2.944.624a4.27 4.27 0 0 0-1.952 1.904V7.528h-4.48V25h4.8Z"
          fill="#000112"
          fillRule="nonzero"
        />
        <g transform="translate(0 1)" fill="#635FC7">
          <rect width="6" height="25" rx="2" />
          <rect opacity=".75" x="9" width="6" height="25" rx="2" />
          <rect opacity=".5" x="18" width="6" height="25" rx="2" />
        </g>
      </g>
    </svg>
  );
};

const HideSidebar = () => {
  return (
    <svg width="18" height="16" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.522 11.223a4.252 4.252 0 0 1-3.654-5.22l3.654 5.22ZM9 12.25A8.685 8.685 0 0 1 1.5 8a8.612 8.612 0 0 1 2.76-2.864l-.86-1.23A10.112 10.112 0 0 0 .208 7.238a1.5 1.5 0 0 0 0 1.524A10.187 10.187 0 0 0 9 13.75c.414 0 .828-.025 1.239-.074l-1-1.43A8.88 8.88 0 0 1 9 12.25Zm8.792-3.488a10.14 10.14 0 0 1-4.486 4.046l1.504 2.148a.375.375 0 0 1-.092.523l-.648.453a.375.375 0 0 1-.523-.092L3.19 1.044A.375.375 0 0 1 3.282.52L3.93.068a.375.375 0 0 1 .523.092l1.735 2.479A10.308 10.308 0 0 1 9 2.25c3.746 0 7.031 2 8.792 4.988a1.5 1.5 0 0 1 0 1.524ZM16.5 8a8.674 8.674 0 0 0-6.755-4.219A1.75 1.75 0 1 0 12.75 5v-.001a4.25 4.25 0 0 1-1.154 5.366l.834 1.192A8.641 8.641 0 0 0 16.5 8Z" />
    </svg>
  );
};

const LightTheme = () => {
  return (
    <svg width="19" height="19" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.167 15.833a.833.833 0 0 1 .833.834v.833a.833.833 0 0 1-1.667 0v-.833a.833.833 0 0 1 .834-.834ZM3.75 13.75a.833.833 0 0 1 .59 1.422l-1.25 1.25a.833.833 0 0 1-1.18-1.178l1.25-1.25a.833.833 0 0 1 .59-.244Zm10.833 0c.221 0 .433.088.59.244l1.25 1.25a.833.833 0 0 1-1.179 1.178l-1.25-1.25a.833.833 0 0 1 .59-1.422ZM9.167 5a4.167 4.167 0 1 1 0 8.334 4.167 4.167 0 0 1 0-8.334Zm-7.5 3.333a.833.833 0 0 1 0 1.667H.833a.833.833 0 1 1 0-1.667h.834Zm15.833 0a.833.833 0 0 1 0 1.667h-.833a.833.833 0 0 1 0-1.667h.833Zm-1.667-6.666a.833.833 0 0 1 .59 1.422l-1.25 1.25a.833.833 0 1 1-1.179-1.178l1.25-1.25a.833.833 0 0 1 .59-.244Zm-13.333 0c.221 0 .433.088.59.244l1.25 1.25a.833.833 0 0 1-1.18 1.178L1.91 3.09a.833.833 0 0 1 .59-1.422ZM9.167 0A.833.833 0 0 1 10 .833v.834a.833.833 0 1 1-1.667 0V.833A.833.833 0 0 1 9.167 0Z" />
    </svg>
  );
};

const DarkTheme = () => {
  return (
    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.474.682c.434-.11.718.406.481.78A6.067 6.067 0 0 0 6.01 4.72c0 3.418 2.827 6.187 6.314 6.187.89.002 1.77-.182 2.584-.54.408-.18.894.165.724.57-1.16 2.775-3.944 4.73-7.194 4.73-4.292 0-7.771-3.41-7.771-7.615 0-3.541 2.466-6.518 5.807-7.37Zm8.433.07c.442-.294.969.232.674.674l-.525.787a1.943 1.943 0 0 0 0 2.157l.525.788c.295.441-.232.968-.674.673l-.787-.525a1.943 1.943 0 0 0-2.157 0l-.786.525c-.442.295-.97-.232-.675-.673l.525-.788a1.943 1.943 0 0 0 0-2.157l-.525-.787c-.295-.442.232-.968.674-.673l.787.525a1.943 1.943 0 0 0 2.157 0Z" />
    </svg>
  );
};

const dynamicStyle = (props: any) =>
  css`
    display: ${props.display};
  `;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  position: relative;

  .header {
    height: 100px;
    display: flex;

    &_logo {
      border-right: 1px solid #dfdbdf;
      min-width: 270px;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
    }

    &_menu {
      width: calc(100% - 270px);
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 100%;
      border-bottom: 1px solid #dfdbdf;
      padding: 0 20px;
    }
  }

  .content {
    height: 100%;
    display: flex;

    &_sidebar {
      border-right: 1px solid #dfdbdf;
      min-width: 270px;
      display: flex;
      padding: 10px 0;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      ${dynamicStyle}
      transition: 1s ease-in-out;
    }

    &_actions {
      border-right: 1px solid #dfdbdf;
      width: 270px;
      display: flex;
      padding: 10px 0;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
    }

    &_hide {
      width: -webkit-fill-available;
      margin: 0 20px;
      padding: 25px 0;
      display: flex;
      align-items: center;
      cursor: pointer;

      span {
        margin-left: 8px;
      }
    }

    &_info {
      padding: 10px 20px;
      flex: 1;
      width: calc(100% - 270px);
      display: flex;
    }
  }

  svg {
    fill: #9f9f9f;
  }
`;

const SwitchTheme = () => {
  const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f4f7fd;
    width: -webkit-fill-available;
    margin: 0 20px;
    height: 55px;

    .switch-toggle {
      margin: 0 20px;

      input[type='checkbox'] {
        position: absolute;
        opacity: 0;
        z-index: -2;
      }

      input[type='checkbox'] + label {
        position: relative;
        display: inline-block;
        width: 80px;
        height: 30px;
        border-radius: 20px;
        cursor: pointer;
        background-color: #635fc7;
      }

      input[type='checkbox'] + label::before {
        position: absolute;
        content: 'OFF';
        text-align: center;
        font-size: 13px;
        line-height: 25px;
        top: 5px;
        left: 8px;
        width: 35px;
        height: 20px;
        border-radius: 20px;
        background-color: #fff;
        transition: 0.3s ease-in-out;
      }

      input[type='checkbox']:checked + label::before {
        left: 50%;
        content: 'ON';
        background-color: #fff;
      }
    }
  `;

  return (
    <Container>
      <LightTheme />
      <div className="switch-toggle">
        <input type="checkbox" id="toggle" />
        <label htmlFor="toggle" />
      </div>
      <DarkTheme />
    </Container>
  );
};

const CustomLayout = () => {
  const [show, setShow] = useState(true);
  return (
    <Wrapper display={show ? '' : 'none'}>
      <header className="header">
        <div className="header_logo">
          <Logo />
        </div>
        <div className="header_menu">
          <div>Platform Launch</div>
          <button type="button">Add new task </button>
        </div>
      </header>
      <main className="content">
        <div className="content_sidebar">
          <div>All boards</div>
          <div className="content_actions">
            <SwitchTheme />
            <div className="content_hide" onClick={() => setShow(false)}>
              <HideSidebar />
              <span>Hide Sidebar</span>
            </div>
          </div>
        </div>
        <div className="content_info">Content</div>
      </main>
      {!show && (
        <div
          onClick={() => setShow(true)}
          style={{
            position: 'absolute',
            bottom: 40,
            left: 0,
          }}
        >
          <svg width="16" height="11" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M15.815 4.434A9.055 9.055 0 0 0 8 0 9.055 9.055 0 0 0 .185 4.434a1.333 1.333 0 0 0 0 1.354A9.055 9.055 0 0 0 8 10.222c3.33 0 6.25-1.777 7.815-4.434a1.333 1.333 0 0 0 0-1.354ZM8 8.89A3.776 3.776 0 0 1 4.222 5.11 3.776 3.776 0 0 1 8 1.333a3.776 3.776 0 0 1 3.778 3.778A3.776 3.776 0 0 1 8 8.89Zm2.889-3.778a2.889 2.889 0 1 1-5.438-1.36 1.19 1.19 0 1 0 1.19-1.189H6.64a2.889 2.889 0 0 1 4.25 2.549Z"
              fill="#1e1b1b"
            />
          </svg>
        </div>
      )}
    </Wrapper>
  );
};

export default CustomLayout;
