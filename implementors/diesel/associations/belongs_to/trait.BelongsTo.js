(function() {var implementors = {};
implementors["questionnaire_rs"] = [{"text":"impl&lt;__FK&gt; BelongsTo&lt;<a class=\"struct\" href=\"questionnaire_rs/models/struct.Presentation.html\" title=\"struct questionnaire_rs::models::Presentation\">Presentation</a>&gt; for <a class=\"struct\" href=\"questionnaire_rs/models/struct.Questions.html\" title=\"struct questionnaire_rs::models::Questions\">Questions</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;__FK: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;&amp;'__a <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i32.html\">i32</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;'__a </a>__FK&gt;&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;&amp;'__a <a class=\"struct\" href=\"questionnaire_rs/models/struct.Presentation.html\" title=\"struct questionnaire_rs::models::Presentation\">Presentation</a>: Identifiable&lt;Id = <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;'__a </a>__FK&gt;,&nbsp;</span>","synthetic":false,"types":["questionnaire_rs::models::Questions"]},{"text":"impl&lt;__FK&gt; BelongsTo&lt;<a class=\"struct\" href=\"questionnaire_rs/models/struct.Presentation.html\" title=\"struct questionnaire_rs::models::Presentation\">Presentation</a>&gt; for <a class=\"struct\" href=\"questionnaire_rs/models/struct.GetQuestionByPresentation.html\" title=\"struct questionnaire_rs::models::GetQuestionByPresentation\">GetQuestionByPresentation</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;__FK: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;&amp;'__a <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i32.html\">i32</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;'__a </a>__FK&gt;&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;&amp;'__a <a class=\"struct\" href=\"questionnaire_rs/models/struct.Presentation.html\" title=\"struct questionnaire_rs::models::Presentation\">Presentation</a>: Identifiable&lt;Id = <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;'__a </a>__FK&gt;,&nbsp;</span>","synthetic":false,"types":["questionnaire_rs::models::GetQuestionByPresentation"]},{"text":"impl&lt;__FK&gt; BelongsTo&lt;<a class=\"struct\" href=\"questionnaire_rs/models/struct.Option.html\" title=\"struct questionnaire_rs::models::Option\">Option</a>&gt; for <a class=\"struct\" href=\"questionnaire_rs/models/struct.Answer.html\" title=\"struct questionnaire_rs::models::Answer\">Answer</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;__FK: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;&amp;'__a <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i32.html\">i32</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;'__a </a>__FK&gt;&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;&amp;'__a <a class=\"struct\" href=\"questionnaire_rs/models/struct.Option.html\" title=\"struct questionnaire_rs::models::Option\">Option</a>: Identifiable&lt;Id = <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;'__a </a>__FK&gt;,&nbsp;</span>","synthetic":false,"types":["questionnaire_rs::models::Answer"]},{"text":"impl&lt;__FK&gt; BelongsTo&lt;<a class=\"struct\" href=\"questionnaire_rs/models/struct.Option.html\" title=\"struct questionnaire_rs::models::Option\">Option</a>&gt; for <a class=\"struct\" href=\"questionnaire_rs/models/struct.NewAnswer.html\" title=\"struct questionnaire_rs::models::NewAnswer\">NewAnswer</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;__FK: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;&amp;'__a <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i32.html\">i32</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;'__a </a>__FK&gt;&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;&amp;'__a <a class=\"struct\" href=\"questionnaire_rs/models/struct.Option.html\" title=\"struct questionnaire_rs::models::Option\">Option</a>: Identifiable&lt;Id = <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;'__a </a>__FK&gt;,&nbsp;</span>","synthetic":false,"types":["questionnaire_rs::models::NewAnswer"]},{"text":"impl&lt;__FK&gt; BelongsTo&lt;<a class=\"struct\" href=\"questionnaire_rs/models/struct.Questions.html\" title=\"struct questionnaire_rs::models::Questions\">Questions</a>&gt; for <a class=\"struct\" href=\"questionnaire_rs/models/struct.Option.html\" title=\"struct questionnaire_rs::models::Option\">Option</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;__FK: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;&amp;'__a <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i32.html\">i32</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;'__a </a>__FK&gt;&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;&amp;'__a <a class=\"struct\" href=\"questionnaire_rs/models/struct.Questions.html\" title=\"struct questionnaire_rs::models::Questions\">Questions</a>: Identifiable&lt;Id = <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;'__a </a>__FK&gt;,&nbsp;</span>","synthetic":false,"types":["questionnaire_rs::models::Option"]},{"text":"impl&lt;__FK&gt; BelongsTo&lt;<a class=\"struct\" href=\"questionnaire_rs/models/struct.Questions.html\" title=\"struct questionnaire_rs::models::Questions\">Questions</a>&gt; for <a class=\"struct\" href=\"questionnaire_rs/models/struct.GetOptionsByQuestion.html\" title=\"struct questionnaire_rs::models::GetOptionsByQuestion\">GetOptionsByQuestion</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;__FK: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;&amp;'__a <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i32.html\">i32</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;'__a </a>__FK&gt;&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;&amp;'__a <a class=\"struct\" href=\"questionnaire_rs/models/struct.Questions.html\" title=\"struct questionnaire_rs::models::Questions\">Questions</a>: Identifiable&lt;Id = <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;'__a </a>__FK&gt;,&nbsp;</span>","synthetic":false,"types":["questionnaire_rs::models::GetOptionsByQuestion"]},{"text":"impl&lt;__FK&gt; BelongsTo&lt;<a class=\"struct\" href=\"questionnaire_rs/models/struct.Questions.html\" title=\"struct questionnaire_rs::models::Questions\">Questions</a>&gt; for <a class=\"struct\" href=\"questionnaire_rs/models/struct.GetAnswersByOption.html\" title=\"struct questionnaire_rs::models::GetAnswersByOption\">GetAnswersByOption</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;__FK: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;&amp;'__a <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i32.html\">i32</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;'__a </a>__FK&gt;&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;&amp;'__a <a class=\"struct\" href=\"questionnaire_rs/models/struct.Questions.html\" title=\"struct questionnaire_rs::models::Questions\">Questions</a>: Identifiable&lt;Id = <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;'__a </a>__FK&gt;,&nbsp;</span>","synthetic":false,"types":["questionnaire_rs::models::GetAnswersByOption"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()