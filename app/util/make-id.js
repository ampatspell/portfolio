export default (len=8) => {
  let text = '';
  let possible = 'abcdefghijklmnopqrstuvwxyz0123456789';
  for(let i=0; i<len; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};
