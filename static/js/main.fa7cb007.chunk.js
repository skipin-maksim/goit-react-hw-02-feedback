(this["webpackJsonpgoit-react-hw-01-components"]=this["webpackJsonpgoit-react-hw-01-components"]||[]).push([[0],[,,,,,function(t,e,a){t.exports={allBtn:"ButtonFeedback_allBtn__1C30O",GoodBtn:"ButtonFeedback_GoodBtn__2dRoH ButtonFeedback_allBtn__1C30O",NeutralBtn:"ButtonFeedback_NeutralBtn__kQcMc ButtonFeedback_allBtn__1C30O",BadBtn:"ButtonFeedback_BadBtn__3bNyZ ButtonFeedback_allBtn__1C30O"}},function(t,e,a){t.exports={Feedback:"PositiveFeedback_Feedback__3XVO_",badFeedback:"PositiveFeedback_badFeedback__2Bkvm PositiveFeedback_Feedback__3XVO_",goodFeedback:"PositiveFeedback_goodFeedback__Un4O- PositiveFeedback_Feedback__3XVO_"}},function(t,e,a){t.exports={Statistics:"Statistics_Statistics__2byYE",StatisticsResoult:"Statistics_StatisticsResoult__3cY0_",badFeedback:"Statistics_badFeedback__3GBIi",goodFeedback:"Statistics_goodFeedback__3eJYd"}},function(t,e,a){t.exports={StatisticsSection:"StatisticsSection_StatisticsSection__2jyyP",titleBlockBtn:"StatisticsSection_titleBlockBtn__3E5u2"}},,,function(t,e,a){t.exports={titleBlockBtn:"ButtonsBlock_titleBlockBtn__2-0XX",buttonsBlock:"ButtonsBlock_buttonsBlock__28x2s"}},function(t,e,a){t.exports={noStatistics:"Notification_noStatistics__1JS-3"}},,function(t,e,a){t.exports=a(21)},,,,,,function(t,e,a){},function(t,e,a){"use strict";a.r(e);var n=a(0),c=a.n(n),o=a(10),r=a.n(o),s=a(1),i=a(2),l=a(4),u=a(3),b=a(13),d=a(5),m=function(t){Object(l.a)(a,t);var e=Object(u.a)(a);function a(){var t;Object(s.a)(this,a);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).switchColorClass=function(t){switch(t){case"good":return d.GoodBtn;case"neutral":return d.NeutralBtn;case"bad":return d.BadBtn;default:return d.allBtn}},t}return Object(i.a)(a,[{key:"render",value:function(){var t=this.props,e=t.name,a=t.onLeaveFeedback;return c.a.createElement("button",{type:"button",className:this.switchColorClass(e),onClick:function(){a(e)}},e)}}]),a}(n.Component),k=a(11),_=a.n(k),p=function(t){Object(l.a)(a,t);var e=Object(u.a)(a);function a(){return Object(s.a)(this,a),e.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var t=this.props,e=(t.title,Object(b.a)(t,["title"]));return c.a.createElement("div",{className:_.a.buttonsBlock},c.a.createElement(m,Object.assign({name:"good"},e)),c.a.createElement(m,Object.assign({name:"neutral"},e)),c.a.createElement(m,Object.assign({name:"bad"},e)))}}]),a}(n.Component),v=function(t){Object(l.a)(a,t);var e=Object(u.a)(a);function a(){return Object(s.a)(this,a),e.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var t=this.props,e=t.name,a=t.data,n=t.totalStats;return n?c.a.createElement("li",{className:"statisticsItem"},e,": ",c.a.createElement("span",null,n())):c.a.createElement("li",{className:"statisticsItem"},e,": ",c.a.createElement("span",null,a))}}]),a}(n.Component),f=a(12),B=a.n(f);var F=function(t){var e=t.message;return c.a.createElement("div",{className:B.a.noStatistics},e)},h=a(6),O=a.n(h),j=function(t){Object(l.a)(a,t);var e=Object(u.a)(a);function a(){var t;Object(s.a)(this,a);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).isClass=function(){var e=t.props.countPositiveFeedback(t.props.totalStats,t.props.dataPositiveFeedback);return Number(e)<35||isNaN(e)?O.a.badFeedback:O.a.goodFeedback},t}return Object(i.a)(a,[{key:"render",value:function(){var t=this.props,e=t.totalStats,a=t.dataPositiveFeedback,n=t.countPositiveFeedback;return c.a.createElement("li",null,"Positive feedback:",c.a.createElement("span",{className:this.isClass()},n(e,a),"%"))}}]),a}(n.Component),S=a(7),E=a.n(S),g=function(t){Object(l.a)(a,t);var e=Object(u.a)(a);function a(){var t;Object(s.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))).countPositiveFeedbackPercentage=function(t,e){return Math.floor(e/t()*100)},t.isFeedbackGiven=function(e){var a=e.data,n=e.totalStats,o=a.good,r=a.neutral,s=a.bad;return 0===n()?c.a.createElement(F,{message:"No feedback given"}):c.a.createElement(c.a.Fragment,null,c.a.createElement("ul",{className:E.a.Statistics},c.a.createElement(v,{name:"Good",data:o}),c.a.createElement(v,{name:"Neutral",data:r}),c.a.createElement(v,{name:"Bad",data:s})),c.a.createElement("ul",{className:E.a.StatisticsResoult},c.a.createElement(v,{name:"Total",totalStats:n}),c.a.createElement(j,{dataPositiveFeedback:o,countPositiveFeedback:t.countPositiveFeedbackPercentage,totalStats:n})))},t}return Object(i.a)(a,[{key:"render",value:function(){var t=this.props.title;return c.a.createElement(c.a.Fragment,null,c.a.createElement("h3",null,t),this.isFeedbackGiven(this.props))}}]),a}(n.Component),y=a(8),N=a.n(y),C=function(t){Object(l.a)(a,t);var e=Object(u.a)(a);function a(){return Object(s.a)(this,a),e.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var t=this.props,e=t.children,a=t.title;return c.a.createElement("section",{className:N.a.StatisticsSection},c.a.createElement("h2",{className:N.a.titleBlockBtn},a),e)}}]),a}(n.Component),P=function(t){Object(l.a)(a,t);var e=Object(u.a)(a);function a(){var t;Object(s.a)(this,a);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={good:0,neutral:0,bad:0,contacts:[],filter:"",name:"",number:""},t.leaveFeedback=function(e){t.setState((function(t){return t[e]+=1}))},t.countTotalFeedback=function(){return Object.values(t.state).reduce((function(t,e){return t+e}))},t}return Object(i.a)(a,[{key:"render",value:function(){return c.a.createElement(C,{title:"Please leave feedback"},c.a.createElement(p,{onLeaveFeedback:this.leaveFeedback}),c.a.createElement(g,{title:"Statistics",data:this.state,totalStats:this.countTotalFeedback}))}}]),a}(n.Component);a(19),a(20);r.a.render(c.a.createElement(P,null),document.querySelector("#root"))}],[[14,1,2]]]);
//# sourceMappingURL=main.fa7cb007.chunk.js.map