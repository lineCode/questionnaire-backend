(function() {var implementors = {};
implementors["questionnaire_rs"] = [{"text":"impl&lt;__DB:&nbsp;Backend, __ST&gt; Queryable&lt;__ST, __DB&gt; for <a class=\"struct\" href=\"questionnaire_rs/models/struct.Questions.html\" title=\"struct questionnaire_rs::models::Questions\">Questions</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i32.html\">i32</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>, <a class=\"struct\" href=\"https://docs.rs/chrono/latest/chrono/naive/datetime/struct.NaiveDateTime.html\" title=\"struct chrono::naive::datetime::NaiveDateTime\">NaiveDateTime</a>, <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i32.html\">i32</a>, <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i32.html\">i32</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">)</a>: Queryable&lt;__ST, __DB&gt;,&nbsp;</span>","synthetic":false,"types":["questionnaire_rs::models::Questions"]},{"text":"impl&lt;__DB:&nbsp;Backend, __ST&gt; Queryable&lt;__ST, __DB&gt; for <a class=\"struct\" href=\"questionnaire_rs/models/struct.GetQuestion.html\" title=\"struct questionnaire_rs::models::GetQuestion\">GetQuestion</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i32.html\">i32</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">,)</a>: Queryable&lt;__ST, __DB&gt;,&nbsp;</span>","synthetic":false,"types":["questionnaire_rs::models::GetQuestion"]},{"text":"impl&lt;__DB:&nbsp;Backend, __ST&gt; Queryable&lt;__ST, __DB&gt; for <a class=\"struct\" href=\"questionnaire_rs/models/struct.GetQuestionByPresentation.html\" title=\"struct questionnaire_rs::models::GetQuestionByPresentation\">GetQuestionByPresentation</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i32.html\">i32</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">,)</a>: Queryable&lt;__ST, __DB&gt;,&nbsp;</span>","synthetic":false,"types":["questionnaire_rs::models::GetQuestionByPresentation"]},{"text":"impl&lt;__DB:&nbsp;Backend, __ST&gt; Queryable&lt;__ST, __DB&gt; for <a class=\"struct\" href=\"questionnaire_rs/models/struct.Answer.html\" title=\"struct questionnaire_rs::models::Answer\">Answer</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i32.html\">i32</a>, <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i32.html\">i32</a>, <a class=\"struct\" href=\"https://docs.rs/chrono/latest/chrono/naive/datetime/struct.NaiveDateTime.html\" title=\"struct chrono::naive::datetime::NaiveDateTime\">NaiveDateTime</a>, <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i32.html\">i32</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">)</a>: Queryable&lt;__ST, __DB&gt;,&nbsp;</span>","synthetic":false,"types":["questionnaire_rs::models::Answer"]},{"text":"impl&lt;__DB:&nbsp;Backend, __ST&gt; Queryable&lt;__ST, __DB&gt; for <a class=\"struct\" href=\"questionnaire_rs/models/struct.GetAnswerById.html\" title=\"struct questionnaire_rs::models::GetAnswerById\">GetAnswerById</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i32.html\">i32</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">,)</a>: Queryable&lt;__ST, __DB&gt;,&nbsp;</span>","synthetic":false,"types":["questionnaire_rs::models::GetAnswerById"]},{"text":"impl&lt;__DB:&nbsp;Backend, __ST&gt; Queryable&lt;__ST, __DB&gt; for <a class=\"struct\" href=\"questionnaire_rs/models/struct.Presentation.html\" title=\"struct questionnaire_rs::models::Presentation\">Presentation</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i32.html\">i32</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>, <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i32.html\">i32</a>, <a class=\"struct\" href=\"https://docs.rs/chrono/latest/chrono/naive/datetime/struct.NaiveDateTime.html\" title=\"struct chrono::naive::datetime::NaiveDateTime\">NaiveDateTime</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">)</a>: Queryable&lt;__ST, __DB&gt;,&nbsp;</span>","synthetic":false,"types":["questionnaire_rs::models::Presentation"]},{"text":"impl&lt;__DB:&nbsp;Backend, __ST&gt; Queryable&lt;__ST, __DB&gt; for <a class=\"struct\" href=\"questionnaire_rs/models/struct.GetPresentation.html\" title=\"struct questionnaire_rs::models::GetPresentation\">GetPresentation</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i32.html\">i32</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">,)</a>: Queryable&lt;__ST, __DB&gt;,&nbsp;</span>","synthetic":false,"types":["questionnaire_rs::models::GetPresentation"]},{"text":"impl&lt;__DB:&nbsp;Backend, __ST&gt; Queryable&lt;__ST, __DB&gt; for <a class=\"struct\" href=\"questionnaire_rs/models/struct.Option.html\" title=\"struct questionnaire_rs::models::Option\">Option</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i32.html\">i32</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>, <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i32.html\">i32</a>, <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i32.html\">i32</a>, <a class=\"struct\" href=\"https://docs.rs/chrono/latest/chrono/naive/datetime/struct.NaiveDateTime.html\" title=\"struct chrono::naive::datetime::NaiveDateTime\">NaiveDateTime</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">)</a>: Queryable&lt;__ST, __DB&gt;,&nbsp;</span>","synthetic":false,"types":["questionnaire_rs::models::Option"]},{"text":"impl&lt;__DB:&nbsp;Backend, __ST&gt; Queryable&lt;__ST, __DB&gt; for <a class=\"struct\" href=\"questionnaire_rs/models/struct.GetOption.html\" title=\"struct questionnaire_rs::models::GetOption\">GetOption</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i32.html\">i32</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">,)</a>: Queryable&lt;__ST, __DB&gt;,&nbsp;</span>","synthetic":false,"types":["questionnaire_rs::models::GetOption"]},{"text":"impl&lt;__DB:&nbsp;Backend, __ST&gt; Queryable&lt;__ST, __DB&gt; for <a class=\"struct\" href=\"questionnaire_rs/models/struct.GetOptionsByQuestion.html\" title=\"struct questionnaire_rs::models::GetOptionsByQuestion\">GetOptionsByQuestion</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i32.html\">i32</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">,)</a>: Queryable&lt;__ST, __DB&gt;,&nbsp;</span>","synthetic":false,"types":["questionnaire_rs::models::GetOptionsByQuestion"]},{"text":"impl&lt;__DB:&nbsp;Backend, __ST&gt; Queryable&lt;__ST, __DB&gt; for <a class=\"struct\" href=\"questionnaire_rs/models/struct.GetAnswersByOption.html\" title=\"struct questionnaire_rs::models::GetAnswersByOption\">GetAnswersByOption</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i32.html\">i32</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">,)</a>: Queryable&lt;__ST, __DB&gt;,&nbsp;</span>","synthetic":false,"types":["questionnaire_rs::models::GetAnswersByOption"]},{"text":"impl&lt;__DB:&nbsp;Backend, __ST&gt; Queryable&lt;__ST, __DB&gt; for <a class=\"struct\" href=\"questionnaire_rs/models/struct.User.html\" title=\"struct questionnaire_rs::models::User\">User</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i32.html\">i32</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>, <a class=\"struct\" href=\"https://docs.rs/chrono/latest/chrono/naive/datetime/struct.NaiveDateTime.html\" title=\"struct chrono::naive::datetime::NaiveDateTime\">NaiveDateTime</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">)</a>: Queryable&lt;__ST, __DB&gt;,&nbsp;</span>","synthetic":false,"types":["questionnaire_rs::models::User"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()