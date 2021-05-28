type svgsType = {
  [key: string]: string;
};

const svgs: svgsType = {
  clear: `
    <title>맑음</title>
    <path fill="#F4900C" d="M18 35.8c-.39 0-.745-.218-.921-.565l-1.8-3.554-3.024 2.596c-.191.161-.43.247-.672.247-.133 0-.267-.025-.394-.078-.359-.148-.606-.487-.634-.873l-.304-3.976-3.788 1.241c-.105.034-.213.051-.321.051-.27 0-.532-.106-.73-.303-.274-.273-.371-.681-.25-1.051l1.24-3.788-3.972-.301c-.387-.031-.726-.275-.875-.634-.148-.361-.083-.772.17-1.067l2.594-3.024-3.554-1.8C.418 18.745.2 18.388.2 18s.218-.745.565-.921l3.554-1.8-2.594-3.024c-.252-.295-.318-.708-.17-1.066.149-.359.487-.606.875-.634l3.972-.304-1.24-3.788c-.121-.37-.024-.775.25-1.051.198-.196.46-.301.73-.301.108 0 .216.017.321.051l3.788 1.24.304-3.972c.029-.388.275-.726.634-.875.127-.052.261-.078.394-.078.242 0 .481.084.672.248l3.024 2.594 1.8-3.554C17.255.418 17.61.2 18 .2c.388 0 .745.218.92.565l1.802 3.554 3.024-2.594c.19-.164.431-.248.671-.248.135 0 .268.026.396.078.358.149.603.487.634.875l.303 3.972 3.785-1.24c.105-.035.215-.051.321-.051.27 0 .534.105.729.301.276.276.373.682.252 1.051l-1.241 3.788 3.976.304c.386.029.725.275.873.634.148.358.084.771-.169 1.066l-2.596 3.024 3.554 1.8c.348.177.566.533.566.921s-.218.744-.565.921l-3.554 1.8 2.596 3.024c.253.295.317.706.169 1.067-.148.358-.487.603-.876.634l-3.973.301 1.241 3.788c.121.371.024.777-.252 1.051-.195.197-.46.303-.729.303-.106 0-.216-.017-.321-.051l-3.785-1.241-.303 3.973c-.031.389-.275.728-.634.876-.129.053-.262.078-.396.078-.24 0-.48-.086-.671-.247l-3.024-2.596-1.802 3.554c-.176.347-.533.565-.921.565z" />
    <path fill="#FFCC4D" d="M31 18c0 7.179-5.821 13-13 13S5 25.18 5 18 10.821 5 18 5s13 5.821 13 13" />
    <path d="M18 23.471c-6.222 0-8-2.328-8-1.228 0 1.102 3.556 3.98 8 3.98s8-2.879 8-3.98c0-1.1-1.777 1.228-8 1.228m8-8.804c0 1.473-1.194 2.667-2.667 2.667-1.472 0-2.666-1.194-2.666-2.667S21.861 12 23.333 12C24.806 12 26 13.193 26 14.667m-10.667 0c0 1.473-1.195 2.667-2.667 2.667-1.472 0-2.667-1.194-2.667-2.667S11.195 12 12.667 12c1.472 0 2.666 1.193 2.666 2.667" fill="#F4900C" />
      `,
  cloud: `
    <title>흐림</title>
    <path fill="#CCD6DD" d="M27 8c-.701 0-1.377.106-2.015.298.005-.1.015-.197.015-.298 0-3.313-2.687-6-6-6-2.769 0-5.093 1.878-5.785 4.427C12.529 6.154 11.783 6 11 6c-3.314 0-6 2.686-6 6 0 3.312 2.686 6 6 6 2.769 0 5.093-1.878 5.785-4.428.686.273 1.432.428 2.215.428.375 0 .74-.039 1.096-.104-.058.36-.096.727-.096 1.104 0 3.865 3.135 7 7 7s7-3.135 7-7c0-3.866-3.135-7-7-7z"/>
    <path fill="#E1E8ED" d="M31 22c-.467 0-.91.085-1.339.204.216-.526.339-1.1.339-1.704 0-2.485-2.015-4.5-4.5-4.5-1.019 0-1.947.351-2.701.921C22.093 14.096 19.544 12 16.5 12c-2.838 0-5.245 1.822-6.131 4.357C9.621 16.125 8.825 16 8 16c-4.418 0-8 3.582-8 8 0 4.419 3.582 8 8 8h23c2.762 0 5-2.238 5-5s-2.238-5-5-5z"/>
      `,
  rain: `
    <title>비</title>
    <path fill="#E1E8ED" d="M28 4c-.825 0-1.62.125-2.369.357C24.744 1.822 22.338 0 19.5 0c-3.044 0-5.592 2.096-6.299 4.921C12.447 4.351 11.519 4 10.5 4 8.015 4 6 6.015 6 8.5c0 .604.123 1.178.339 1.704C5.91 10.085 5.467 10 5 10c-2.762 0-5 2.238-5 5s2.238 5 5 5h23c4.418 0 8-3.581 8-8 0-4.418-3.582-8-8-8z" />
    <path fill="#5DADEC" d="M11.999 24.961l-.113-3.421-2.87 1.708c-.638.345-1.062 1.024-1.036 1.799.037 1.103.966 1.976 2.076 1.953 1.109-.023 1.98-.937 1.943-2.039zm-1.979 7.46L9.907 29l-2.87 1.708c-.638.345-1.062 1.024-1.036 1.799.037 1.103.966 1.976 2.076 1.953 1.11-.023 1.98-.937 1.943-2.039zm-5-4.46l-.113-3.421-2.87 1.708c-.638.345-1.062 1.024-1.036 1.799.037 1.102.966 1.975 2.076 1.953 1.11-.023 1.98-.937 1.943-2.039zm18-3l-.113-3.421-2.869 1.708c-.639.345-1.062 1.024-1.036 1.799.037 1.103.966 1.976 2.076 1.953 1.109-.023 1.979-.937 1.942-2.039zm-6.021 4l-.113-3.421-2.869 1.708c-.639.345-1.062 1.024-1.036 1.799.037 1.103.966 1.976 2.076 1.953 1.109-.023 1.979-.937 1.942-2.039zm5.021 4.46L21.906 30l-2.869 1.708c-.639.345-1.062 1.024-1.036 1.799.037 1.103.966 1.976 2.076 1.953 1.11-.023 1.98-.937 1.943-2.039zm6.979-5.46l-.113-3.421-2.869 1.708c-.639.345-1.062 1.024-1.036 1.799.037 1.103.966 1.976 2.076 1.953 1.109-.023 1.979-.937 1.942-2.039z" />
      `,
  snow: `
    <title>눈</title>
    <path fill="#E1E8ED" d="M28 4c-.825 0-1.62.125-2.369.357C24.744 1.822 22.338 0 19.5 0c-3.044 0-5.592 2.096-6.299 4.921C12.447 4.351 11.519 4 10.5 4 8.015 4 6 6.015 6 8.5c0 .604.123 1.178.339 1.704C5.91 10.085 5.467 10 5 10c-2.762 0-5 2.238-5 5s2.238 5 5 5h23c4.418 0 8-3.581 8-8 0-4.418-3.582-8-8-8z" />
    <path d="M6.53 26.75c-.138-.239-.443-.32-.683-.183L4 27.634V25.5c0-.276-.224-.5-.5-.5s-.5.224-.5.5v2.135l-1.849-1.067c-.239-.138-.545-.057-.683.183-.139.24-.057.545.183.684L2.499 28.5.651 29.567c-.239.138-.32.443-.183.683.138.24.443.321.683.184L3 29.366V31.5c0 .276.224.5.5.5s.5-.224.5-.5v-2.133l1.848 1.067c.239.138.545.057.683-.184.138-.239.057-.545-.183-.683L4.5 28.5l1.848-1.067c.239-.138.321-.443.182-.683zm10 4c-.138-.239-.443-.32-.683-.183L14 31.634V29.5c0-.276-.224-.5-.5-.5s-.5.224-.5.5v2.135l-1.849-1.067c-.239-.138-.545-.057-.683.183-.139.24-.057.545.183.684l1.848 1.067-1.848 1.067c-.239.138-.32.443-.183.683.138.24.443.321.683.184L13 33.366V35.5c0 .276.224.5.5.5s.5-.224.5-.5v-2.133l1.848 1.067c.239.138.545.057.683-.184.138-.239.057-.545-.183-.683L14.5 32.5l1.848-1.067c.239-.138.321-.443.182-.683zM11 27.5c0 .276.224.5.5.5s.5-.224.5-.5v-2.133l1.848 1.067c.239.138.545.057.683-.184.138-.239.057-.545-.183-.683L12.5 24.5l1.848-1.067c.239-.139.321-.443.183-.684-.138-.239-.443-.32-.683-.183L12 23.634V21.5c0-.276-.224-.5-.5-.5s-.5.224-.5.5v2.135l-1.849-1.067c-.239-.138-.545-.057-.683.183-.139.24-.057.545.183.684l1.848 1.067-1.848 1.067c-.239.138-.32.443-.183.683.138.24.443.321.683.184L11 25.366V27.5zm12.848-.066c.239.138.545.057.683-.184.138-.239.057-.545-.183-.683L22.5 25.5l1.848-1.067c.239-.139.321-.443.183-.684-.138-.239-.443-.32-.683-.183L22 24.634V22.5c0-.276-.224-.5-.5-.5s-.5.224-.5.5v2.135l-1.849-1.067c-.239-.138-.545-.057-.683.183-.139.24-.057.545.183.684l1.848 1.067-1.848 1.067c-.239.138-.32.443-.183.683.138.24.443.321.683.184L21 26.366V28.5c0 .276.224.5.5.5s.5-.224.5-.5v-2.133l1.848 1.067zm10.5-1.867L32.5 24.5l1.848-1.067c.239-.139.321-.443.183-.684-.138-.239-.443-.32-.683-.183L32 23.634V21.5c0-.276-.224-.5-.5-.5s-.5.224-.5.5v2.135l-1.849-1.067c-.239-.138-.545-.057-.683.183-.139.24-.057.545.183.684l1.848 1.067-1.848 1.067c-.239.138-.32.443-.183.683.138.24.443.321.683.184L31 25.366V27.5c0 .276.224.5.5.5s.5-.224.5-.5v-2.133l1.848 1.067c.239.138.545.057.683-.184.137-.239.056-.545-.183-.683zM29.53 30.75c-.138-.239-.443-.32-.683-.183L27 31.634V29.5c0-.276-.224-.5-.5-.5s-.5.224-.5.5v2.135l-1.849-1.067c-.239-.138-.545-.057-.683.183-.139.24-.057.545.183.684l1.848 1.067-1.848 1.067c-.239.138-.32.443-.183.683.138.24.443.321.683.184L26 33.366V35.5c0 .276.224.5.5.5s.5-.224.5-.5v-2.133l1.848 1.067c.239.138.545.057.683-.184.138-.239.057-.545-.183-.683L27.5 32.5l1.848-1.067c.239-.138.321-.443.182-.683z" fill="#5DADEC" />
      `,
  temp: `
    <title>기온</title>
    <path fill="#CCD6DD" d="M33.536 2.464c-1.953-1.953-5.118-1.953-7.071 0l-1.197 1.199 2.842 2.843c.391.391.391 1.024 0 1.414-.195.195-.451.293-.707.293s-.512-.098-.707-.293l-2.841-2.842-2.11 2.112 2.841 2.84c.391.39.391 1.023 0 1.414-.195.195-.451.293-.707.293s-.512-.098-.707-.293l-2.84-2.839-2.12 2.122 2.837 2.838c.391.391.391 1.024 0 1.414-.195.195-.451.293-.707.293s-.512-.098-.707-.293l-2.837-2.837-2.12 2.123 2.836 2.836c.391.391.391 1.023 0 1.414-.195.195-.451.293-.707.293s-.512-.098-.707-.293l-2.835-2.835-2.12 2.123 2.833 2.833c.391.391.391 1.023 0 1.414-.195.195-.451.293-.707.293s-.512-.098-.707-.293l-2.833-2.832-1.781 1.785C4.107 21.03 1 24.151 1 28c0 3.866 3.134 7 7 7 3.832 0 6.941-3.081 6.995-6.9L33.536 9.536c1.952-1.953 1.952-5.119 0-7.072z" />
    <path fill="#DD2E44" d="M30.938 5.091c-.781-.781-2.047-.781-2.828 0L9.045 24.156c-1.338-.362-2.823-.035-3.873 1.015-1.562 1.562-1.562 4.095 0 5.657 1.562 1.562 4.095 1.562 5.657 0C11.867 29.79 12.2 28.326 11.858 27l19.08-19.08c.781-.781.781-2.048 0-2.829z" />
    <path fill="#292F33" d="M13.272 22.343c.256 0 .512-.098.707-.293.391-.391.391-1.023 0-1.414l-2.833-2.833-1.413 1.415 2.833 2.832c.194.195.45.293.706.293zm3.536-3.535c.256 0 .512-.098.707-.293.391-.391.391-1.023 0-1.414l-2.836-2.836-1.413 1.415 2.835 2.835c.195.195.451.293.707.293zm3.535-3.536c.256 0 .512-.098.707-.293.391-.39.391-1.023 0-1.414l-2.837-2.838-1.413 1.415 2.837 2.837c.194.195.45.293.706.293zm3.536-3.536c.256 0 .512-.098.707-.293.391-.391.391-1.024 0-1.414l-2.841-2.84-1.413 1.415 2.84 2.839c.195.196.451.293.707.293zm3.523-3.523c.256 0 .512-.098.707-.293.391-.39.391-1.023 0-1.414l-2.842-2.843-1.413 1.415 2.841 2.842c.196.195.451.293.707.293z" />
      `,
  pop: `
    <title>강수확률</title>
    <path fill="#5DADEC" d="M28.344 17.768L18.148 1.09 8.7 17.654c-2.2 3.51-2.392 8.074-.081 11.854 3.285 5.373 10.363 7.098 15.811 3.857 5.446-3.24 7.199-10.22 3.914-15.597z" />
      `,
};

window.onload = () => {
  show();
  setInterval(show, 1000 * 60 * 60);
};

const getData = (callback: any) => {
  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'data');
  xhr.setRequestHeader('Content-Type', 'application/json');

  xhr.onload = function () {
    callback(JSON.parse(xhr.responseText));
  };
  xhr.onerror = function () {
    console.error('Data fetch error');
  };

  xhr.send();
};

const show = () => {
  getData((result: any) => {
    addHTML(result);
  });
};

const getKRTime = () => {
  const currTime = new Date();
  const utcTime = currTime.getTime() + currTime.getTimezoneOffset() * 60 * 1000;
  const KR_TIME_DIFF = 9 * 60 * 60 * 1000;
  const KRTime = new Date(utcTime + KR_TIME_DIFF);
  return KRTime;
};

const getCurrentTime = () => {
  const html = `<div id="update">갱신: ${getKRTime().toString()}</div>`;
  const template = document.createElement('template');
  template.innerHTML = html.trim();
  const childNode = template.content.firstChild as ChildNode;
  return childNode;
};

const svgWrapper = (svg: string, size: number, shadow: boolean) => {
  return `
    <div ${shadow ? "class='svg-shadow'" : ''}>
      <svg  xmlns="http://www.w3.org/2000/svg" width="${size}" viewBox="0 0 36 36">
        ${svg}
      </svg>
    </div>
    `;
};

const makeHTML = (value: any) => {
  const weather = value['weather'];
  const html = `
      <div class="container">
      <div class="flex center neu text-small mono abs card-title bg-light">${
        value['date']
      }</div>
      <div class="neu card-body bg-dark">
        <div class="empty-box"></div>
        <div class="flex center weather">
          ${svgWrapper(svgs[weather], 200, true)}
        </div>
        <div class="flex number-wrapper">
          <div class="flex center number temp">
            ${svgWrapper(svgs['temp'], 40, false)}
            <span class="text-small mono">${value['temp']}℃</span>
          </div>
          <div class="flex center number rain">
            ${svgWrapper(svgs['pop'], 40, false)}
            <span class="text-small mono">${value['rain']}%</span>
          </div>
        </div>
      </div>
      </div>`;
  const template = document.createElement('template');
  template.innerHTML = html.trim();

  const childNode = template.content.firstChild as ChildNode;
  return childNode;
};

const addHTML = (data: any) => {
  const containers = document.getElementsByClassName('cards')[0];
  containers.textContent = '';
  for (const index in data) {
    const value = data[index];
    const html = makeHTML(value);
    containers.appendChild(html);
  }
  const currentTime = getCurrentTime();
  const app = document.getElementsByClassName('app')[0];
  app.appendChild(currentTime);
};
