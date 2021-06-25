(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{659:function(e,t,a){"use strict";a.r(t);var n=a(38),s=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"the-metadata-parameter"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#the-metadata-parameter"}},[e._v("#")]),e._v(" The Metadata Parameter")]),e._v(" "),a("p",[e._v("Any function that returns the "),a("RouterLink",{attrs:{to:"/help/contribution/extension-development/model-reference/#pageddata"}},[e._v("PagedData")]),e._v(" object will also accept a parameter\ncalled "),a("code",[e._v("metadata")]),e._v(" with type "),a("code",[e._v("any")]),e._v(". However, it is unclear how this parameter actually works just from looking at the\nmethod signature.")],1),e._v(" "),a("p",[e._v("Metadata has a type signature of "),a("code",[e._v("any")]),e._v(" because it can be used however the source developer works. The purpose\nof "),a("code",[e._v("metadata")]),e._v(" is to carry information between method calls, or a rudimentary method of keeping state.")]),e._v(" "),a("p",[e._v("One of the parameters in "),a("RouterLink",{attrs:{to:"/help/contribution/extension-development/model-reference/#pageddata"}},[e._v("PagedData")]),e._v(" is "),a("code",[e._v("metadata")]),e._v(", which also has a type value of "),a("code",[e._v("any")]),e._v(".\nWhen a method containing "),a("code",[e._v("metadata")]),e._v(" is first called, "),a("code",[e._v("metadata")]),e._v(" will be null. Future invocations of the method will use\nthe value of "),a("code",[e._v("metadata")]),e._v(" from the last invocation's PagedData's "),a("code",[e._v("metadata")]),e._v(" field.")],1),e._v(" "),a("p",[e._v("For example, if I return a paged object that contains the following fields:")]),e._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("createPagedObject")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n\tresults"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("...")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n\tmetadata"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),a("p",[e._v("The next time the same method is called again, it will be called with this signature: "),a("code",[e._v("(..., 1)")]),e._v(".")]),e._v(" "),a("p",[e._v("The purpose of metadata is mostly for pagination. Methods such as searching are called once to get the initial results\nand again every time the user scrolls down. If the user scrolls down, we don't want to show the first page of results\nagain, but rather the second page of results. This is useful when there are hundreds of pages of results, because\notherwise it would take too much time to fetch all 100 pages if the user is only interested in the first few pages.")]),e._v(" "),a("p",[e._v("Most developers return an object with the page number, although it is not necessary to return an object.")]),e._v(" "),a("h2",{attrs:{id:"example-implementation-of-metadata"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-implementation-of-metadata"}},[e._v("#")]),e._v(" Example Implementation of Metadata")]),e._v(" "),a("p",[e._v("See the "),a("RouterLink",{attrs:{to:"/help/contribution/extension-development/function-definitions/#example-implementation-4"}},[e._v("example implementation of the "),a("code",[e._v("searchRequest")]),e._v(" method")]),e._v(" on how\nto use the metadata parameter.")],1)])}),[],!1,null,null,null);t.default=s.exports}}]);