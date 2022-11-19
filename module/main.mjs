class Cont {
  constructor(data, url) {
    this.data = data;
    this.url = url;
  }
  img(theme, url) {
    const div = document.createElement("div");
    const h4 = document.createElement("h4");
    const badge = document.createElement("span");
    const img = document.createElement("img");
    div.className = `div`
    badge.classList = `badge`;
    badge.innerHTML = theme;
    img.src = url + theme;
    h4.appendChild(badge);
    div.appendChild(h4);
    div.appendChild(img);
    document.body.appendChild(div);
  };
  render(){
    const data = this.data;
    for (let i = 0; i < data.length; i++) {
        const url = this.url;
        const mode = data[i];
        this.img(mode, url);
      }      
  }
}
export {Cont}
