(this.webpackJsonprecipebox=this.webpackJsonprecipebox||[]).push([[0],{13:function(e,t,a){e.exports=a(24)},18:function(e,t,a){},24:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),s=a(9),r=a.n(s),c=(a(18),a(10)),l=a(2),o=a(3),d=a(11),m=a(12),u=a(4),p=a(5);var h=function(e){var t=e.names.map((function(t,a){return i.a.createElement("div",{className:"select",key:a},i.a.createElement("div",{className:a===e.selectValue?" selected":"",onClick:function(t){return e.onClick(a)}},t),i.a.createElement("button",{className:"btn"+(a===e.selectValue?" show":" hide"),onClick:function(t){return e.delete(a)}},i.a.createElement(u.a,{icon:p.c})),i.a.createElement("button",{className:"btn"+(a===e.selectValue?" show":" hide"),onClick:function(t){return e.modify(a)}},i.a.createElement(u.a,{icon:p.a})))}));return i.a.createElement("div",{className:"selectBox"},t,i.a.createElement("div",{className:"toolbar select"},i.a.createElement("button",{className:"btn",onClick:e.create},i.a.createElement(u.a,{icon:p.b}))))};var g=function(e){return i.a.createElement("div",{className:"dialog"+(e.dialogShow?" show":"")},i.a.createElement("div",{className:"modal"},i.a.createElement("div",{className:"head"},"Enter your recipe details here."),i.a.createElement("div",null,i.a.createElement("input",{className:"resName",placeholder:"Enter recipe name",type:"text",value:e.resName,onChange:function(t){return e.onChange(t,"resName")}})),i.a.createElement("div",null,i.a.createElement("textarea",{placeholder:"Enter the ingredients in different lines",className:"ingInput",value:e.ings,onChange:function(t){return e.onChange(t,"ing")}})),i.a.createElement("div",null,i.a.createElement("textarea",{placeholder:"Enter the directions in different lines",className:"dirInput",value:e.dirs,onChange:function(t){return e.onChange(t,"dirs")}})),i.a.createElement("div",{className:"btns"},i.a.createElement("button",{className:"btn",onClick:e.save},"Save"),i.a.createElement("button",{className:"btn",onClick:e.exit},"Exit"))))};var v=function(e){var t,a;return e.detail&&(t=e.detail.ingredients.map((function(e,t){return i.a.createElement("li",{key:t},e)})),a=e.detail.directions.map((function(e,t){return i.a.createElement("li",{key:t},e)}))),i.a.createElement("div",{className:"recipeDetail"},i.a.createElement("div",{className:"ingredients"},i.a.createElement("div",{className:"head"},"Ingredients"),i.a.createElement("ul",{className:"body"},t)),i.a.createElement("div",{className:"directions"},i.a.createElement("div",{className:"head"},"Directions"),i.a.createElement("ol",{className:"body"},a)))},f=new(function(){function e(){Object(l.a)(this,e)}return Object(o.a)(e,[{key:"set",value:function(e){var t=JSON.stringify(e);localStorage.setItem("_myState",t)}},{key:"get",value:function(){var e=localStorage.getItem("_myState");return JSON.parse(e)}}]),e}());null===f.get("_myState")&&f.set({recipes:[{recipeName:"Artichoke Pasta",ingredients:["2 tablespoons butter","2 cloves garlic, minced","1 cup heavy cream","3/4 teaspoon salt","1 teaspoon fresh-ground black pepper","2 1/2 cups canned, drained artichoke hearts (two 14-ounce cans), rinsed and cut into halves or quarters","3/4 pound fusilli","1/2 cup grated Parmesan cheese","2 tablespoons chopped chives, scallion tops, or parsley"],directions:["In a medium saucepan, melt the butter over moderately low heat. Add the garlic and cook for 30 seconds. Stir in the cream, salt, pepper, and artichoke hearts. Cook until just heated through, about 3 minutes.","In a large pot of boiling, salted water, cook the fusilli until just done, about 13 minutes. Drain the pasta and toss with the cream sauce, Parmesan, and chives"]},{recipeName:"Garlic Chicken",ingredients:["3 tablespoons butter","1 teaspoon seasoning salt","1 teaspoon onion powder","4 skinless, boneless chicken breast halves","2 teaspoons garlic powder"],directions:["Melt butter in a large skillet over medium high heat.","Add chicken and sprinkle with garlic powder, seasoning salt and onion powder.","Saute about 10 to 15 minutes on each side, or until chicken is cooked through and juices run clear."]}],selected:0});var E=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).setLS=function(t){f.set({recipes:e.state.recipes,selected:e.state.selected})},e.deleteRecipe=function(t){var a=e.state.recipes.filter((function(e,a){return t!==a}));e.setState({recipes:a,selected:0},e.setLS)},e.modifyRecipe=function(t){e.setState((function(e){return{ing:e.recipes[e.selected].ingredients.join("\n"),resName:e.recipes[e.selected].recipeName,dirs:e.recipes[e.selected].directions.join("\n"),dialog:!0,new:!1}}))},e.createRecipe=function(t){e.setState({ing:"",dirs:"",resName:"",new:!0,dialog:!0})},e.exit=function(t){e.setState({dialog:!1})},e.saveRecipe=function(t){var a=e.state.resName,n=e.state.ing.split(/[\n\r]+/g),i=e.state.dirs.split(/[\n\r]+/g);""!==a?e.setState((function(e){var t;return e.new?t=e.recipes.concat({recipeName:a,ingredients:n,directions:i}):(e.recipes[e.selected]={recipeName:a,ingredients:n,directions:i},t=e.recipes),{recipes:t,dialog:!1}}),e.setLS):alert("Enter name")},e.handleSelectItem=function(t){e.setState({selected:t},e.setLS)},e.handleChange=function(t,a){e.setState(Object(c.a)({},a,t.target.value))},e.state={recipes:f.get("_myState").recipes,selected:f.get("_myState").selected,dialog:!1,ing:"",dirs:"",resName:"",new:!0},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.state.recipes.map((function(e){return e.recipeName}));return i.a.createElement("div",{className:"App"},i.a.createElement(g,{dialogShow:this.state.dialog,dirs:this.state.dirs,ings:this.state.ing,resName:this.state.resName,onChange:this.handleChange,save:this.saveRecipe,exit:this.exit}),i.a.createElement("div",{className:"header"},"Recipe Box"),i.a.createElement("div",{className:"recipeContainer"},i.a.createElement(h,{onClick:this.handleSelectItem,names:e,selectValue:this.state.selected,delete:this.deleteRecipe,modify:this.modifyRecipe,create:this.createRecipe}),i.a.createElement(v,{detail:this.state.recipes[this.state.selected]})))}}]),a}(i.a.Component);r.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(E,null)),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.3d7da428.chunk.js.map