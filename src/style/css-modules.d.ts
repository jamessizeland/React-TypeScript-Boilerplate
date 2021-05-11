// DO NOT DELETE THIS FILE
// required for css-modules https://skovy.dev/generating-typescript-definitions-for-css-modules-using-sass/
declare module '*.module.scss' {
  const styles: { [className: string]: string };
  export default styles;
}

declare module '*.module.css' {
  const styles: { [className: string]: string };
  export default styles;
}
