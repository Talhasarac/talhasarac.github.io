class ShareAction extends HTMLElement{constructor(){super();const t="share"in window.navigator?this.onWebShare:this.onTwitterShare;this.addEventListener("click",t.bind(this)),this.tabIndex=0}onWebShare(e){e.preventDefault(),navigator.share({url:this.shareUrl,text:this.shareText})}onTwitterShare(e){e.preventDefault();const t=new URL("https://twitter.com/share");t.searchParams.set("url",this.shareUrl),t.searchParams.set("text",this.shareText),window.open(t.toString(),"share-twitter","width=550,height=500")}get shareUrl(){const e=document.querySelector('link[rel="canonical"]');return e?e.href:window.location.href}get shareText(){if(this.dataset.text)return this.dataset.text;const e=document.querySelector('meta[property="og:title"]');return e?e.content:document.title}}customElements.define("share-action",ShareAction);
