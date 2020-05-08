(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{394:function(e,t,a){"use strict";a.r(t);var r=a(33),n=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"what-you-will-learn"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-you-will-learn"}},[e._v("#")]),e._v(" What you will learn")]),e._v(" "),a("p",[e._v("Real world data is almost always messy or unstructured, and most of the time of the Data Scientist is spent on data preprocessing (or data cleaning), before visualize them or feeding them to Machine Learning models."),a("br"),e._v("\nThe purpose of this guide is to show you the importance of theese steps, mostly about text data, but will be listed guides about cleaning each kind data you can encounter.")]),e._v(" "),a("h1",{attrs:{id:"index"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#index"}},[e._v("#")]),e._v(" Index")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#Data-Preprocessing"}},[e._v("Data Preprocessing")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#Don't-Joke-With-Data"}},[e._v("Don't Joke With Data")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#Business-Questions"}},[e._v("Business Questions")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#Data-Profiling"}},[e._v("Data Profiling")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#Who-To-Leave-Behind"}},[e._v("Who To Leave Behind")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#Start-small"}},[e._v("Start Small")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#The-Toolkit"}},[e._v("The Toolkit")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#Data-Cleaning"}},[e._v("Data Cleaning")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#Get-Rid-of-Extra-Spaces"}},[e._v("Get Rid of Extra Spaces")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#Select-and-Treat-All-Blank-Cells"}},[e._v("Select and Treat All Blank Cells")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#Convert-Values-Type"}},[e._v("Convert Values Type")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#Remove-Duplicates"}},[e._v("Remove Duplicates")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#Change-Text-to-Lower/Upper-Case"}},[e._v("Change Text to Lower/Upper Case")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#Spell-Check"}},[e._v("Spell Check")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#Dealing-with-Special-Characters"}},[e._v("Dealing with Special Characters")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#Normalizing-Dates"}},[e._v("Normalizing Dates")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#Verification-To-Enrich-Data"}},[e._v("Verification To Enrich Data")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#Data-Discretization"}},[e._v("Data Discretization")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#Feature-Scaling"}},[e._v("Feature Scaling")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#Data-Cleaning-Tools"}},[e._v("Data Cleaning Tools")])])])]),e._v(" "),a("li",[a("a",{attrs:{href:"#Merge-Data-Sets-and-Integration"}},[e._v("Merge Data Sets and Integration")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#Sanity-Check"}},[e._v("Sanity Check")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#Automate-These-Boring-Stuffs!"}},[e._v("Automate These Boring Stuffs!")])])]),e._v(" "),a("h1",{attrs:{id:"data-preprocessing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#data-preprocessing"}},[e._v("#")]),e._v(" Data Preprocessing")]),e._v(" "),a("p",[e._v('Data preprocessing (also known as Data Preparation, but "Preprocessing" sounds more like magic) is the '),a("a",{attrs:{href:"http://www.jsoftware.us/vol12/306-JSW15277.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("iterative process"),a("OutboundLink")],1),e._v(" of gathering, combining, structuring and organizing data so it can be analyzed as part of data visualization, analytics, and machine learning applications.")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://www.quanticate.com/blog/real-world-data-analysis-in-clinical-trials",target:"_blank",rel:"noopener noreferrer"}},[e._v("Real-world data"),a("OutboundLink")],1),e._v(" is often incomplete, inconsistent, and/or lacking in certain behaviors or trends, and is likely to contain many errors. Data preprocessing is a proven method of resolving such issues.")]),e._v(" "),a("p",[e._v("It's the "),a("a",{attrs:{href:"https://blogs.sas.com/content/hiddeninsights/2017/11/30/analytical-data-preparation-important/",target:"_blank",rel:"noopener noreferrer"}},[e._v("core ability"),a("OutboundLink")],1),e._v(" of any data scientist or data engineer, and you must "),a("em",[e._v("be able to manipulate, clean, and structure")]),e._v(" your data during the everyday work (besides expecting that this will take the most of your "),a("a",{attrs:{href:"https://www.infoworld.com/article/3228245/the-80-20-data-science-dilemma.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("daily-time"),a("OutboundLink")],1),e._v("!).")]),e._v(" "),a("p",[e._v("There are a lot of different data types out there, and they deserve "),a("a",{attrs:{href:"http://blog.appliedinformaticsinc.com/data-mining-challenges-in-data-cleaning/",target:"_blank",rel:"noopener noreferrer"}},[e._v("different treatments"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("As usual the structure I've planned to get you started consists of having a "),a("a",{attrs:{href:"https://searchbusinessanalytics.techtarget.com/definition/data-preparation",target:"_blank",rel:"noopener noreferrer"}},[e._v("general overview"),a("OutboundLink")],1),e._v(", and then dive deep into each data processing situation you can encounter.")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://towardsdatascience.com/data-pre-processing-techniques-you-should-know-8954662716d6",target:"_blank",rel:"noopener noreferrer"}},[e._v("Here"),a("OutboundLink")],1),e._v(" you have a gentle end-to-end panoramic view of the entire process.")]),e._v(" "),a("p",[a("strong",[e._v("Let's Start!")])]),e._v(" "),a("h3",{attrs:{id:"don-t-joke-with-data"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#don-t-joke-with-data"}},[e._v("#")]),e._v(" Don't Joke With Data")]),e._v(" "),a("p",[e._v("First, "),a("a",{attrs:{href:"https://www.edq.com/glossary/data-quality-importance/",target:"_blank",rel:"noopener noreferrer"}},[a("strong",[e._v("data is King")]),a("OutboundLink")],1),e._v(". In the "),a("a",{attrs:{href:"https://www.venturi-group.com/qa-with-helen-mannion/",target:"_blank",rel:"noopener noreferrer"}},[e._v("data-driven epoch"),a("OutboundLink")],1),e._v(", having "),a("a",{attrs:{href:"https://www.ringlead.com/blog/7-common-data-quality-issues/",target:"_blank",rel:"noopener noreferrer"}},[e._v("data quality issues"),a("OutboundLink")],1),e._v(" means to lose tremendous amounts of value for a company, in the present and in the future. So, respect your King and care a lot about him. The most immediate way to do this is to plan and "),a("a",{attrs:{href:"https://nektardata.com/high-quality-data/",target:"_blank",rel:"noopener noreferrer"}},[e._v("work hard"),a("OutboundLink")],1),e._v(" to "),a("em",[e._v("produce")]),e._v(" good quality data.\nYour goal is to plan a collecting data infrastructure that fixes problems beforehand. This means to care to a lot about planning well your database schemas (do I need "),a("a",{attrs:{href:"https://social.technet.microsoft.com/Forums/Lync/en-US/7bf4ca30-a1bc-415d-97e6-ce0ac3137b53/normalized-3nf-vs-denormalizedstar-schema-data-warehouse-?forum=sqldatawarehousing",target:"_blank",rel:"noopener noreferrer"}},[e._v("third-normal form"),a("OutboundLink")],1),e._v(" or not?), how do you collect data from sensors (physical or conceptual) and so on. These are problems if you're building a system up from the ground, but most of the times in you're gonna facing real-world problems that someone wants to solve with "),a("a",{attrs:{href:"https://www.wired.com/insights/2013/05/more-data-more-problems-is-big-data-always-right/",target:"_blank",rel:"noopener noreferrer"}},[a("em",[e._v("already available")]),a("OutboundLink")],1),e._v(" data.")]),e._v(" "),a("h3",{attrs:{id:"business-questions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#business-questions"}},[e._v("#")]),e._v(" Business Questions")]),e._v(" "),a("p",[e._v("Asking the "),a("a",{attrs:{href:"https://www.datapine.com/blog/data-analysis-questions/",target:"_blank",rel:"noopener noreferrer"}},[e._v("right business questions"),a("OutboundLink")],1),e._v(" is hard, but it has the "),a("a",{attrs:{href:"https://towardsdatascience.com/start-your-data-exploration-with-questions-2f1d42cff29e",target:"_blank",rel:"noopener noreferrer"}},[e._v("biggest impact"),a("OutboundLink")],1),e._v(" on your performance of solving a particular problem. Remember, you want to "),a("a",{attrs:{href:"http://www.informit.com/articles/article.aspx?p=2271188&seqNum=2",target:"_blank",rel:"noopener noreferrer"}},[e._v("solve a problem"),a("OutboundLink")],1),e._v(", not to create new ones!")]),e._v(" "),a("h3",{attrs:{id:"data-profiling"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#data-profiling"}},[e._v("#")]),e._v(" Data Profiling")]),e._v(" "),a("p",[e._v("According to the (cold as ice) "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Data_profiling",target:"_blank",rel:"noopener noreferrer"}},[e._v("Wikipedia definition"),a("OutboundLink")],1),e._v(': "Data profiling is the process of examining the data available from an existing information source (e.g. a database or a file) and collecting statistics and informative data summaries."'),a("br"),e._v("\nSo Wikipedia is subtly suggesting us to take a coffee with the data.")]),e._v(" "),a("p",[e._v("During this informal meeting, ask the data questions like:")]),e._v(" "),a("ul",[a("li",[e._v("which business problem are you meant to solve? (what is important, and what is not)")]),e._v(" "),a("li",[e._v("how have you been collected (with noise, missing values...)?")]),e._v(" "),a("li",[e._v("how many friends of yours are there and where can I find them? (data dimensions and retrieving from storages)")])]),e._v(" "),a("p",[e._v("Eventually, you may find the data too much quiet, maybe they're just shy! "),a("br"),e._v("\nAnyway, you're going to "),a("a",{attrs:{href:"https://business-analysis-excellence.com/business-requirements-meeting/",target:"_blank",rel:"noopener noreferrer"}},[e._v("ask these questions to the business user"),a("OutboundLink")],1),e._v("!")]),e._v(" "),a("p",[a("em",[e._v("Best practices and exercises:")]),e._v(" "),a("a",{attrs:{href:"https://www.iqint.org/idq2013/presentations/downloads/di_loreto_data_profiling_tutorial_monday_am.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("1"),a("OutboundLink")],1),e._v(", "),a("a",{attrs:{href:"https://community.alteryx.com/t5/Alteryx-Designer-Discussions/Data-profiling-tutorials-use-cases-and-exercise/td-p/145347",target:"_blank",rel:"noopener noreferrer"}},[e._v("2"),a("OutboundLink")],1)]),e._v(" "),a("h3",{attrs:{id:"who-to-leave-behind"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#who-to-leave-behind"}},[e._v("#")]),e._v(" Who To Leave Behind")]),e._v(" "),a("p",[e._v("During the data profiling process, it's common to realize that often some of your data are "),a("a",{attrs:{href:"https://ambisense.net/why-useless-data-is-worse-than-no-data/",target:"_blank",rel:"noopener noreferrer"}},[e._v("useless"),a("OutboundLink")],1),e._v(". Your data may have too much noise or they are partial, and most likely you don't all of them to answer your business problems.\n"),a("a",{attrs:{href:"https://www.theanalysisfactor.com/outliers-to-drop-or-not-to-drop/",target:"_blank",rel:"noopener noreferrer"}},[e._v("To drop or not to drop, the Dilemma"),a("OutboundLink")],1),e._v(".\nEach time you're facing a data related problem, try to understand what data you need and what you' don't - that is, for each piece of information, ask yourself (and ask the "),a("em",[e._v("business user")]),e._v("):")]),e._v(" "),a("ul",[a("li",[e._v("How this data is going to help me?")]),e._v(" "),a("li",[e._v("Is possible to use them, reducing noise o missing values?")]),e._v(" "),a("li",[e._v("Considering the benefits/costs of the preparation process versus the business value created, Is this data worth it?")])]),e._v(" "),a("h3",{attrs:{id:"start-small"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#start-small"}},[e._v("#")]),e._v(" Start Small")]),e._v(" "),a("p",[e._v("It's stupid to handle GBs of data each time you want to try a data preparation step. Just use "),a("a",{attrs:{href:"https://sdtimes.com/bi/data-gets-big-best-practices-data-preparation-scale/",target:"_blank",rel:"noopener noreferrer"}},[e._v("small subsets"),a("OutboundLink")],1),e._v(" of the data (but take care that they are representative and you catch all the problems). Remember, if you want to experiment with string cleaning, you don't need to launch your script on 10M rows.")]),e._v(" "),a("h3",{attrs:{id:"the-toolkit"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#the-toolkit"}},[e._v("#")]),e._v(" The Toolkit")]),e._v(" "),a("p",[e._v("The tools we're gonna use are Python3 and his "),a("a",{attrs:{href:"https://pandas.pydata.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Pandas library"),a("OutboundLink")],1),e._v(", the de-facto standard to manipulate datasets.\nThe heavy lifting here is done by the "),a("a",{attrs:{href:"https://pandas.pydata.org/pandas-docs/stable/reference/api/pandas.DataFrame.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("DataFrame class"),a("OutboundLink")],1),e._v(", which comes with a bunch of useful functions for your daily data tasks.\nHopefully, you already know Python, if not start from there (do the steps I suggest you in the ML guide requirements), and then take this "),a("a",{attrs:{href:"https://pandas.pydata.org/pandas-docs/stable/getting_started/10min.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Beginner Pandas tutorial"),a("OutboundLink")],1),e._v(". Don't worry if now some ideas are not totally clear, but try to get the big picture of the common "),a("a",{attrs:{href:"https://www.analyticsvidhya.com/blog/2016/01/12-pandas-techniques-python-data-manipulation/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Pandas operations"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[a("em",[e._v("Best practices and exercises:")]),e._v(" "),a("a",{attrs:{href:"https://github.com/guipsamora/pandas_exercises",target:"_blank",rel:"noopener noreferrer"}},[e._v("1"),a("OutboundLink")],1),e._v(", "),a("a",{attrs:{href:"https://www.w3resource.com/python-exercises/pandas/index.php",target:"_blank",rel:"noopener noreferrer"}},[e._v("2"),a("OutboundLink")],1),e._v(", "),a("a",{attrs:{href:"https://www.machinelearningplus.com/python/101-pandas-exercises-python/",target:"_blank",rel:"noopener noreferrer"}},[e._v("3"),a("OutboundLink")],1),e._v(", "),a("a",{attrs:{href:"https://www.kaggle.com/pistak/pandas-tutorial-with-interactive-exercises",target:"_blank",rel:"noopener noreferrer"}},[e._v("4"),a("OutboundLink")],1),e._v(", "),a("a",{attrs:{href:"http://disi.unitn.it/~teso/courses/sciprog/python_pandas_exercises.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("5"),a("OutboundLink")],1)]),e._v(" "),a("h3",{attrs:{id:"data-cleaning"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#data-cleaning"}},[e._v("#")]),e._v(" Data Cleaning")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Data_cleansing",target:"_blank",rel:"noopener noreferrer"}},[e._v("Data cleaning"),a("OutboundLink")],1),e._v(" is the general process of taking data, after you have a clear big picture of them, and you need to realize the actual process of replacing characters, dropping incomplete rows, fill missing values and so forth. In the next sections, we'll explore all the common data cleaning situations.")]),e._v(" "),a("h3",{attrs:{id:"get-rid-of-extra-spaces"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#get-rid-of-extra-spaces"}},[e._v("#")]),e._v(" Get Rid of Extra Spaces")]),e._v(" "),a("p",[e._v("One of the first things you want to do is "),a("a",{attrs:{href:"https://stackoverflow.com/questions/43332057/pandas-strip-white-space",target:"_blank",rel:"noopener noreferrer"}},[e._v("remove extra spaces"),a("OutboundLink")],1),e._v('. Take care! Some space can carry information, but it heavily depends on the situation. For example, in "Complete Name": "Giacomo Ciarlini" in nice to have space so we can later split this into "Name": "Giacomo" and "Surname": "Ciarlini". I want you to notice that in general, apart from recommending and suggestion customization systems, unique identifiers like names or IDs are something you can generally drop. Often, they do not carry information.\n'),a("em",[e._v("Bonus tip")]),e._v(": learn how to use "),a("a",{attrs:{href:"https://www.analyticsvidhya.com/blog/2015/06/regular-expression-python/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Regex"),a("OutboundLink")],1),e._v(" for pattern matching, this is one of the powerful tools each data guy need to master.")]),e._v(" "),a("p",[a("em",[e._v("Best practices and exercises:")]),e._v(" "),a("a",{attrs:{href:"https://www.quora.com/How-do-you-remove-all-whitespace-from-a-Python-string",target:"_blank",rel:"noopener noreferrer"}},[e._v("1"),a("OutboundLink")],1),e._v(", "),a("a",{attrs:{href:"https://towardsdatascience.com/5-methods-to-remove-the-from-your-data-in-python-and-the-fastest-one-281489382455",target:"_blank",rel:"noopener noreferrer"}},[e._v("2"),a("OutboundLink")],1),e._v(", "),a("a",{attrs:{href:"https://www.tutorialspoint.com/How-to-remove-all-leading-whitespace-in-string-in-Python",target:"_blank",rel:"noopener noreferrer"}},[e._v("3"),a("OutboundLink")],1)]),e._v(" "),a("p",[a("em",[e._v("RegeX exercises")]),e._v(": "),a("a",{attrs:{href:"https://www.w3resource.com/python-exercises/re/",target:"_blank",rel:"noopener noreferrer"}},[e._v("1"),a("OutboundLink")],1),e._v(", "),a("a",{attrs:{href:"https://pycon2016.regex.training/exercises",target:"_blank",rel:"noopener noreferrer"}},[e._v("2"),a("OutboundLink")],1)]),e._v(" "),a("p",[a("em",[e._v("Bonus Resource")]),e._v(": A super useful "),a("a",{attrs:{href:"http://regviz.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("tool"),a("OutboundLink")],1),e._v(" for visualizing RegeX expressions and their effect on the text.")]),e._v(" "),a("h3",{attrs:{id:"select-and-treat-all-blank-cells"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#select-and-treat-all-blank-cells"}},[e._v("#")]),e._v(" Select and Treat All Blank Cells")]),e._v(" "),a("p",[e._v("Often real-world data is incomplete and is necessary to handle this situation. "),a("a",{attrs:{href:"https://code.likeagirl.io/how-to-use-python-to-remove-or-modify-empty-values-in-a-csv-dataset-34426c816347",target:"_blank",rel:"noopener noreferrer"}},[e._v("These"),a("OutboundLink")],1),e._v(" are two ways of dealing with it. "),a("a",{attrs:{href:"https://hackersandslackers.com/pandas-dataframe-drop/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Here"),a("OutboundLink")],1),e._v(" you have a more in-depth tutorial.")]),e._v(" "),a("p",[a("em",[e._v("Best practices and exercises:")]),e._v(" "),a("a",{attrs:{href:"https://www.kaggle.com/nirmal51194/data-cleaning-challenge-handling-missing-values",target:"_blank",rel:"noopener noreferrer"}},[e._v("1"),a("OutboundLink")],1),e._v(", "),a("a",{attrs:{href:"https://stefvanbuuren.name/fimd/missing-data-pattern.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("2"),a("OutboundLink")],1),e._v(", "),a("a",{attrs:{href:"https://www.ethz.ch/content/dam/ethz/special-interest/math/statistics/sfs/Education/Advanced%20Studies%20in%20Applied%20Statistics/course-material-1719/Multivariate/w10-in-class-exercise-imputation-solution.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("3"),a("OutboundLink")],1),e._v(", "),a("a",{attrs:{href:"http://uc-r.github.io/missing_values",target:"_blank",rel:"noopener noreferrer"}},[e._v("4"),a("OutboundLink")],1)]),e._v(" "),a("h3",{attrs:{id:"convert-values-type"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#convert-values-type"}},[e._v("#")]),e._v(" Convert Values Type")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://pbpython.com/pandas_dtypes.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Different data types"),a("OutboundLink")],1),e._v(" carries different information, and you need to care about this.\n"),a("a",{attrs:{href:"https://www.geeksforgeeks.org/python-pandas-series-astype-to-convert-data-type-of-series/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Here"),a("OutboundLink")],1),e._v(' is a good tutorial on how to convert type values. Remember that Python has some shortcut for doing this (executing str(3) will give you back the "3" string) but I recommend you to learn how to do it with Pandas.')]),e._v(" "),a("h3",{attrs:{id:"remove-duplicates"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#remove-duplicates"}},[e._v("#")]),e._v(" Remove Duplicates")]),e._v(" "),a("p",[e._v("You don't want to duplicate data, they both are noise and occupy space! Learn "),a("a",{attrs:{href:"https://www.geeksforgeeks.org/python-pandas-dataframe-drop_duplicates/",target:"_blank",rel:"noopener noreferrer"}},[e._v("how to handle them simply"),a("OutboundLink")],1),e._v(" with Pandas.")]),e._v(" "),a("h3",{attrs:{id:"change-text-to-lower-upper-case"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#change-text-to-lower-upper-case"}},[e._v("#")]),e._v(" Change Text to Lower/Upper Case")]),e._v(" "),a("p",[e._v("You want to "),a("em",[e._v("Capitalize")]),e._v(" names, or maybe make them uniform (some people can enter data with or without capital letters!). Check "),a("a",{attrs:{href:"https://www.geeksforgeeks.org/python-pandas-series-str-lower-upper-and-title/",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v(" for the Pandas way to do it.")]),e._v(" "),a("h3",{attrs:{id:"spell-check"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#spell-check"}},[e._v("#")]),e._v(" Spell Check")]),e._v(" "),a("p",[e._v("You want to correct wrong words, for the sake of evenness. Check "),a("a",{attrs:{href:"https://www.tutorialspoint.com/python/python_spelling_check.htm",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v(" for a good Python module to do it. Also, this is a good starting point to "),a("a",{attrs:{href:"https://stackoverflow.com/questions/46409475/spell-checker-in-pandas",target:"_blank",rel:"noopener noreferrer"}},[e._v("implement it"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[a("em",[e._v("Best practices and exercises:")]),e._v(" "),a("a",{attrs:{href:"https://stackoverflow.com/questions/7315114/spell-check-program-in-python",target:"_blank",rel:"noopener noreferrer"}},[e._v("1"),a("OutboundLink")],1),e._v(", "),a("a",{attrs:{href:"https://norvig.com/spell-correct.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("2"),a("OutboundLink")],1),e._v(", "),a("a",{attrs:{href:"https://github.com/garytse89/Python-Exercises/tree/master/autoCorrect",target:"_blank",rel:"noopener noreferrer"}},[e._v("3"),a("OutboundLink")],1)]),e._v(" "),a("h3",{attrs:{id:"reshape-your-data"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reshape-your-data"}},[e._v("#")]),e._v(" Reshape your data")]),e._v(" "),a("p",[e._v("Maybe you're going to feed your data into a neural network or show them in a colorful bars plot. Anyway, you need to transform your data and give them the right shape for your data pipeline. "),a("a",{attrs:{href:"https://towardsdatascience.com/seven-clean-steps-to-reshape-your-data-with-pandas-or-how-i-use-python-where-excel-fails-62061f86ef9c",target:"_blank",rel:"noopener noreferrer"}},[e._v("Here"),a("OutboundLink")],1),e._v(" is a very good tutorial for this task.")]),e._v(" "),a("p",[a("em",[e._v("Best practices and exercises:")]),e._v(" "),a("a",{attrs:{href:"https://pandas.pydata.org/pandas-docs/stable/user_guide/reshaping.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("1"),a("OutboundLink")],1),e._v(", "),a("a",{attrs:{href:"https://discuss.codecademy.com/t/faq-data-cleaning-with-pandas-reshaping-your-data/384794",target:"_blank",rel:"noopener noreferrer"}},[e._v("2"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"dealing-with-special-characters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dealing-with-special-characters"}},[e._v("#")]),e._v(" Dealing with Special Characters")]),e._v(" "),a("p",[e._v("UTF-encoding is the standard to follow, but remember that not everyone follows the rules (otherwise, we'd not need "),a("a",{attrs:{href:"http://scholarworks.sjsu.edu/cgi/viewcontent.cgi?article=1633&context=etd_projects",target:"_blank",rel:"noopener noreferrer"}},[e._v("crime predictive analytics"),a("OutboundLink")],1),e._v(". You can learn "),a("a",{attrs:{href:"https://stackoverflow.com/questions/45596529/replacing-special-characters-in-pandas-dataframe",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v(" how to deal with strange accents or special characters.")]),e._v(" "),a("p",[a("em",[e._v("Best practices and exercises:")]),e._v(" "),a("a",{attrs:{href:"https://www.w3resource.com/python-exercises/python-basic-exercise-92.php",target:"_blank",rel:"noopener noreferrer"}},[e._v("1"),a("OutboundLink")],1),e._v(", "),a("a",{attrs:{href:"https://stackoverflow.com/questions/22518703/escape-sequences-exercise-in-python?rq=1",target:"_blank",rel:"noopener noreferrer"}},[e._v("2"),a("OutboundLink")],1),e._v(", "),a("a",{attrs:{href:"https://learnpythonthehardway.org/book/ex2.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("3"),a("OutboundLink")],1)]),e._v(" "),a("h3",{attrs:{id:"normalizing-dates"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#normalizing-dates"}},[e._v("#")]),e._v(" Normalizing Dates")]),e._v(" "),a("p",[e._v("I think there could be one hundred ways to write down a date. You need to decide your format and make them uniform across your dataset, and "),a("a",{attrs:{href:"https://medium.com/jbennetcodes/dealing-with-datetimes-like-a-pro-in-pandas-b80d3d808a7f",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v(" you learn how to do it.")]),e._v(" "),a("p",[a("em",[e._v("Best practices and exercises:")]),e._v(" "),a("a",{attrs:{href:"https://www.w3resource.com/python-exercises/python-conditional-exercise-41.php",target:"_blank",rel:"noopener noreferrer"}},[e._v("1"),a("OutboundLink")],1),e._v(", "),a("a",{attrs:{href:"https://www.w3resource.com/python-exercises/date-time-exercise/",target:"_blank",rel:"noopener noreferrer"}},[e._v("2"),a("OutboundLink")],1),e._v(", "),a("a",{attrs:{href:"https://www.kaggle.com/anezka/data-cleaning-challenge-parsing-dates",target:"_blank",rel:"noopener noreferrer"}},[e._v("3"),a("OutboundLink")],1)]),e._v(" "),a("h3",{attrs:{id:"verification-to-enrich-data"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#verification-to-enrich-data"}},[e._v("#")]),e._v(" Verification to enrich data")]),e._v(" "),a("p",[e._v("Sometimes can be useful to engineer some data, for example: suppose you're dealing with "),a("a",{attrs:{href:"https://www.edataindia.com/why-data-cleansing-is-important/",target:"_blank",rel:"noopener noreferrer"}},[e._v("e-commerce data"),a("OutboundLink")],1),e._v(", and you have the prices of each object sold. You may want to add a new column in your dataset, with a label carrying handy information like a Price_level [low, medium, high] based on upper and lower bounds you can decide. This is really simple in Pandas, check "),a("a",{attrs:{href:"https://stackoverflow.com/questions/19913659/pandas-conditional-creation-of-a-series-dataframe-column",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v(". Another example is to add a Gender column (M, F) to easily explore data and gain insights in a customers dataset.")]),e._v(" "),a("p",[a("em",[e._v("Best practices and exercises:")]),e._v(" "),a("a",{attrs:{href:"http://www.inweb.org.br/w3c/dataenrichment/",target:"_blank",rel:"noopener noreferrer"}},[e._v("1"),a("OutboundLink")],1),e._v(", "),a("a",{attrs:{href:"https://solutionsreview.com/data-integration/best-practices-for-data-enrichment-after-etl/",target:"_blank",rel:"noopener noreferrer"}},[e._v("2"),a("OutboundLink")],1),e._v(", "),a("a",{attrs:{href:"http://www.inweb.org.br/w3c/dataenrichment/",target:"_blank",rel:"noopener noreferrer"}},[e._v("3"),a("OutboundLink")],1)]),e._v(" "),a("h3",{attrs:{id:"data-discretization"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#data-discretization"}},[e._v("#")]),e._v(" Data Discretization")]),e._v(" "),a("p",[e._v("Many Machine Learning and Data Analysis methods cannot handle continuous data, and dealing with them can be computationally prohibitive. "),a("a",{attrs:{href:"https://www.youtube.com/watch?v=TF3_6lwITQg",target:"_blank",rel:"noopener noreferrer"}},[e._v("Here"),a("OutboundLink")],1),e._v(" you find a good video explaining why and how you need to discretize data.")]),e._v(" "),a("p",[a("em",[e._v("Best practices and exercises:")]),e._v(" "),a("a",{attrs:{href:"https://www.researchgate.net/post/What_are_the_best_methods_for_discretization_of_continuous_features",target:"_blank",rel:"noopener noreferrer"}},[e._v("1"),a("OutboundLink")],1),e._v(", "),a("a",{attrs:{href:"https://towardsdatascience.com/discretisation-using-decision-trees-21910483fa4b",target:"_blank",rel:"noopener noreferrer"}},[e._v("2"),a("OutboundLink")],1),e._v(", "),a("a",{attrs:{href:"https://docs.microsoft.com/en-us/sql/analysis-services/data-mining/discretization-methods-data-mining",target:"_blank",rel:"noopener noreferrer"}},[e._v("3"),a("OutboundLink")],1)]),e._v(" "),a("h3",{attrs:{id:"feature-scaling"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#feature-scaling"}},[e._v("#")]),e._v(" Feature Scaling")]),e._v(" "),a("p",[e._v("Feature scaling is a method used to standardize the range of independent variables or features of data. In data processing, it is also known as data normalization and is generally performed during the data preprocessing step.\n[Here](Feature scaling is a method used to standardize the range of independent variables or features of data. In data processing, it is also known as data normalization and is generally performed during the data preprocessing step.) you find a serious tutorial about this fundamental step.")]),e._v(" "),a("p",[a("em",[e._v("Best practices and exercises:")]),e._v(" "),a("a",{attrs:{href:"https://www.kaggle.com/jfeng1023/data-cleaning-challenge-scale-and-normalize-data",target:"_blank",rel:"noopener noreferrer"}},[e._v("1"),a("OutboundLink")],1),e._v(", "),a("a",{attrs:{href:"https://www.quora.com/When-should-you-perform-feature-scaling-and-mean-normalization-on-the-given-data-What-are-the-advantages-of-these-techniques",target:"_blank",rel:"noopener noreferrer"}},[e._v("2"),a("OutboundLink")],1),e._v(", "),a("a",{attrs:{href:"https://www.quora.com/When-do-I-have-to-do-feature-scaling-in-machine-learning",target:"_blank",rel:"noopener noreferrer"}},[e._v("3"),a("OutboundLink")],1)]),e._v(" "),a("h3",{attrs:{id:"data-cleaning-tools"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#data-cleaning-tools"}},[e._v("#")]),e._v(" Data Cleaning Tools")]),e._v(" "),a("p",[e._v("You're not going to hunt tigers without a rifle! You have a ton of tools out there that will help you during the data cleaning process, the one I want to suggest you is "),a("a",{attrs:{href:"https://www.analyticsindiamag.com/10-best-data-cleaning-tools-get-data/",target:"_blank",rel:"noopener noreferrer"}},[e._v("this"),a("OutboundLink")],1),e._v(" open source tool from Google. Check "),a("a",{attrs:{href:"https://www.quora.com/What-are-the-best-open-source-data-cleansing-tools-software-available",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v(" for more.")]),e._v(" "),a("h3",{attrs:{id:"merge-data-sets-and-integration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#merge-data-sets-and-integration"}},[e._v("#")]),e._v(" Merge Data Sets and Integration")]),e._v(" "),a("p",[e._v("Now that you hopefully have been successful in your data cleaning process, you can merge data from different source to create big "),a("a",{attrs:{href:"https://www.researchgate.net/post/When_and_why_do_we_need_data_normalization_in_data_mining_algorithms",target:"_blank",rel:"noopener noreferrer"}},[e._v("de-normalized"),a("OutboundLink")],1),e._v(" data tables, ready to be explored and consumed. "),a("a",{attrs:{href:"https://www.quora.com/Is-data-warehouse-normalized-or-denormalized-Why",target:"_blank",rel:"noopener noreferrer"}},[e._v("This"),a("OutboundLink")],1),e._v(" is why.")]),e._v(" "),a("p",[a("em",[e._v("Best practices and exercises:")]),e._v(" "),a("a",{attrs:{href:"https://www.ssc.wisc.edu/sscc/pubs/sfr-combine.htm",target:"_blank",rel:"noopener noreferrer"}},[e._v("1"),a("OutboundLink")],1),e._v(", "),a("a",{attrs:{href:"https://rpubs.com/wsundstrom/t_merge",target:"_blank",rel:"noopener noreferrer"}},[e._v("2"),a("OutboundLink")],1),e._v(", "),a("a",{attrs:{href:"https://jakevdp.github.io/PythonDataScienceHandbook/03.07-merge-and-join.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("3"),a("OutboundLink")],1),e._v(", "),a("a",{attrs:{href:"https://searchbusinessanalytics.techtarget.com/feature/Using-data-merging-and-concatenation-techniques-to-integrate-data",target:"_blank",rel:"noopener noreferrer"}},[e._v("4"),a("OutboundLink")],1),e._v(", "),a("a",{attrs:{href:"https://www.analyticsvidhya.com/blog/2016/06/9-challenges-data-merging-subsetting-r-python-beginner/",target:"_blank",rel:"noopener noreferrer"}},[e._v("5"),a("OutboundLink")],1)]),e._v(" "),a("h3",{attrs:{id:"sanity-check"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sanity-check"}},[e._v("#")]),e._v(" Sanity Check")]),e._v(" "),a("p",[e._v("You always want to be sure that your data are "),a("em",[e._v("exactly")]),e._v(" how you want them to be, and because of this is a good rule of thumb to apply a sanity check after each complete iteration of the data preprocessing pipeline (i.e. each step we have seen until now)\nLook "),a("a",{attrs:{href:"https://www.trifacta.com/blog/4-key-steps-to-sanity-checking-your-data/",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v(" for a good overview. Depending on your case, the sanity check can vary a lot.")]),e._v(" "),a("p",[a("em",[e._v("Best practices and exercises:")]),e._v(" "),a("a",{attrs:{href:"https://blog.socialcops.com/academy/resources/4-data-checks-clean-data/",target:"_blank",rel:"noopener noreferrer"}},[e._v("1"),a("OutboundLink")],1),e._v(", "),a("a",{attrs:{href:"https://www.r-bloggers.com/data-sanity-checks-data-proofer-and-r-analogues/",target:"_blank",rel:"noopener noreferrer"}},[e._v("2"),a("OutboundLink")],1),e._v(", "),a("a",{attrs:{href:"https://www.quora.com/What-is-the-example-of-Sanity-testing-and-smoke-testing",target:"_blank",rel:"noopener noreferrer"}},[e._v("3"),a("OutboundLink")],1)]),e._v(" "),a("h3",{attrs:{id:"automate-these-boring-stuffs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#automate-these-boring-stuffs"}},[e._v("#")]),e._v(" Automate These Boring Stuffs!")]),e._v(" "),a("p",[e._v("As I told you at the very beginning, the data preprocessing process can take a long time and be very tedious. Because of this, you want to "),a("a",{attrs:{href:"https://www.youtube.com/watch?v=UZUoH7_mYx4",target:"_blank",rel:"noopener noreferrer"}},[e._v("automate"),a("OutboundLink")],1),e._v(" the most you can. Also, "),a("strong",[e._v("automation is married with iteration")]),e._v(", so this is the way you need to plan your data preprocessing pipelines. "),a("a",{attrs:{href:"https://github.com/mdkearns/automated-data-preprocessing",target:"_blank",rel:"noopener noreferrer"}},[e._v("Here"),a("OutboundLink")],1),e._v(" you find a good command line tool for doing that, but I'm almost sure you'll need to build your own (remember, each problem is unique!), but this is a good starting point.")]),e._v(" "),a("p",[a("em",[e._v("Best practices and exercises:")]),e._v(" "),a("a",{attrs:{href:"https://blog.panoply.io/5-data-preparation-tools-1-automated-data-platform",target:"_blank",rel:"noopener noreferrer"}},[e._v("1"),a("OutboundLink")],1),e._v(", "),a("a",{attrs:{href:"https://www.quora.com/How-do-I-make-an-automated-data-cleaning-in-Python-for-ML-Is-there-a-trick-for-that",target:"_blank",rel:"noopener noreferrer"}},[e._v("2"),a("OutboundLink")],1),e._v(", "),a("a",{attrs:{href:"https://www.quora.com/Is-there-a-python-package-to-automate-data-preparation-in-machine-learning",target:"_blank",rel:"noopener noreferrer"}},[e._v("3"),a("OutboundLink")],1),e._v(", "),a("a",{attrs:{href:"https://machinelearningmastery.com/prepare-data-machine-learning-python-scikit-learn/",target:"_blank",rel:"noopener noreferrer"}},[e._v("4"),a("OutboundLink")],1),e._v(", "),a("a",{attrs:{href:"https://www.analyticsvidhya.com/blog/2018/10/rapidminer-data-preparation-machine-learning/",target:"_blank",rel:"noopener noreferrer"}},[e._v("5"),a("OutboundLink")],1)]),e._v(" "),a("h3",{attrs:{id:"conclusions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#conclusions"}},[e._v("#")]),e._v(" Conclusions")]),e._v(" "),a("p",[e._v("Now you're ready to take your data and play with them in a variety of ways, and you have a nice panoramic overview of the entire process. You can refer to this page when you clean data, to check if you're not missing some steps. Remember that probably each situation requires a subset of these steps.")])])}),[],!1,null,null,null);t.default=n.exports}}]);