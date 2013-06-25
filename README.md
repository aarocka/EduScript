EduScript [![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/rainbowdash/eduscript/trend.png)](https://bitdeli.com/free "Bitdeli Badge")
====================

TODO LIST OF THINGS TO DO
=========================
1. Make the syntax
2. Figure out all the features
3. Hack all the things
4. Figure out the UI

NEWS
====
Added a list of build directories. To work on the project, work in the common directory. Then when finished, copy your work from the common directory to the build directories. Then build. Normally I would not include build directories, but TideSDK does not allow for crossplatform building. So make sure we have a Mac, Win, and Lin build. PhoneGap is a different story, so ignore it for now. The Wiki will be updated soon for more info.

THE OFFICIAL LIST OF FEATURES
=============================
1. Easy export to different formats
2. MLA and Chicago formating
3. Google Drive Sync
4. Source organization
5. Graphic organizers for things

THE OFFICIAL SYNTAX
===================
The syntax for EduScript is similiar to Markdown. However there is some major additions.

## Paragraphs
Paragraphs are new lines seperated by a blank line.
```
This is the introduction paragraph.

This is the body paragraph.
```
EduScript will take care of formating paragraphs at export.

## Headers and other things
Titles and headers follow a similiar syntax to Markdown. In Markdown, these would be titles and headers.
```
This would be a header
======================

This would also be a header
---------------------------

# This would be a H1 tag
## H2
### H3
###### All the way to H6 
```
What makes our headers different is their use. In html, ,```<h1>Lorem Ipsum</h1>``` translates to different style of text. h1 would be the largest title, and h6 would be the smallest title. These h tags are used for headers and titles. So then what is the difference? Well my young padawan, the EduScript syntax treats headers differently. First off, the official name for these things are headers. These headers can be used for many different purposes, titles are just one thing you can do with them.

HTML only treats header tags as a different style of text, not a section of text. This means that you could have a paragraph, and mid way throught the paragraph, you could use a header tag to emphasize a word. While this is very cool, in the context of a research paper, this is rather unorthodox and nobody will take you seriously. Instead, EduScript treats headers as many different things that can be chosen at export. For instance, your paper might be about molecules. You might want a section about protiens and monosaccarides. You could do this.
```
Understanding protiens
======================
This becomes a new paragraph about protiens.


Understanding monosaccarides
============================
This becomes a section about mono saccarides.

This would be a section because it has multiple paragraphs
```
EduScribe will treat these as different sections. You can also do subsections.
```
Understanding protiens
======================
This becomes a paragraph with an introduction to protiens.

## Folding
This becomes a paragraph about protien folding. This paragraph will render the same way as any other paragraph. The only difference is that any following paragraphs will be part of this "Folding" section.

### Simulation
This is a paragraph about simulating protien folding. This is a sub-section of a sub-section about protien folding.

## Denaturing
This paragraph is not a subsection of folding since it only has two hash marks. Make sense so far?

Understanding monosaccarides
============================
This becomes a section about mono saccarides.

This would be a section because it has multiple paragraphs
```
By treating headers as these nested sections, we are able to do many cool things. By default, rendering these headers is turned off at export. With the rendering turned off, we can use them as a way to organize our writing for refrence purposes. You can however, turn them on and use the headers as a way to do titles. Advanced uses would include using headers to define page breaks, or to generate a table of contents. The sky is the limit.

## Dr.Metadata or how I learned to stop caring about markdown and love the XML syntax(Dr. Strange love refrence)
Markdown is nice for text, but fails at doing xml type data. This means when we want to do metadata, we are going to have to stray away from the markdown syntax and use xml. When we say metadata, we are refering to data about the text, such as author, subject, copyright, editors, and sources. A quick example of XML
```
<xml>
<info>
	<author>Aaron Kolker</author>
	<subject>English</subject>
	<teacher>Williams</teacher>
	<title>Things not to do at a stoplight</title>
</info>
<sources>
	<source1>
		<title>To Kill a Moching Bird</title>
		<type>Book</type>
		<author>
			<author1>
				<first>Harper</first>
				<last>Lee</last>
			</author1>
		</author>
		<publicationinfo>
			<publisher>Penguin Publishing</publisher>
			<publicationdate>11/6/1960</publicationdate>
		</publicationinfo>
		<notes>
			A paragraph in xml or html is similiar to markdown. A single paragraph goes on one line. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec faucibus tincidunt magna ut fermentum. Nullam congue ac ante eu blandit. Aenean ultrices purus sit amet orci consectetur, at convallis justo ullamcorper. Suspendisse venenatis tempor turpis, id viverra neque dignissim at. Integer tristique, ipsum quis tristique convallis, sem lacus lobortis nisl, vel commodo orci velit ut enim. Suspendisse et ante et lectus porta placerat sit amet vehicula lorem. Maecenas at dolor sit amet velit pellentesque faucibus.
		</notes>
	</source1>
</xml>
```

As you can probably figure, xml syntax breaks down everything into what are called "tags". Tags start with a ```<```, contain a tag name, ```info```, followed by a ```>```. This opens a section where you can add text or nest other tags. When you are finished you use what is called a "close tag". Close tags are ```<```, followed by a ```/```, then the tag name ```info```, followed by a ```>```.

When we want to define metadata, we will use the Github flavoured markdown fenced code blocks. Also, code blocks are virtulaly the same as they are on Github. EduScript follows the same conventions for code blocks. Just define the language as MetaData.

Well for metadata just do this
```markdown
	```MetaData
	<xml>
	<info>
		<author>Aaron Kolker</author>
		<subject>English</subject>
		<teacher>Williams</teacher>
		<title>Things not to do at a stoplight</title>
	</info>
	<sources>
		<source1>
			<title>To Kill a Moching Bird</title>
			<type>Book</type>
			<author>
				<author1>
					<first>Harper</first>
					<last>Lee</last>
				</author1>
			</author>
			<publicationinfo>
				<publisher>Penguin Publishing</publisher>
				<publicationdate>11/6/1960</publicationdate>
			</publicationinfo>
			<notes>
				A paragraph in xml or html is similiar to markdown. A single paragraph goes on one line. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec faucibus tincidunt magna ut fermentum. Nullam congue ac ante eu blandit. Aenean ultrices purus sit amet orci consectetur, at convallis justo ullamcorper. Suspendisse venenatis tempor turpis, id viverra neque dignissim at. Integer tristique, ipsum quis tristique convallis, sem lacus lobortis nisl, vel commodo orci velit ut enim. Suspendisse et ante et lectus porta placerat sit amet vehicula lorem. Maecenas at dolor sit amet velit pellentesque faucibus.
			</notes>
		</source1>
	</xml>
	```
```
Problem solved. This section only serves how to start a metadata section and use code blocks, not how to implement metadata. More info can be found in later sections, or in its own guide on the wiki(moar on that lat3rz^_^).

## Quotes and Citations
In order to properly export mla, apa, or chicago, EduScript must know what kind of quote something is. To do this, the EduScript syntax adds a new quoting and citing syntax to the existing markdown syntax.

### Quotes
There are many different things you can quote. You can quote books, poems, movies, songs, or anything that has text. There is a difference in quoting dialogue vs. regular text. In order to have proper quotes, the metadata needs to be properly defiened.
To quote something you would type 
``` 
Intro to the quote, "The quote"(s1 a 20-21).
```
The intepreter sees ```""().``` meaning that there is a quotation, a citation, and end punctuation. Inside the quotes, you would write the section of text exactly as it appears in the source. For poems, lines should be seperated with ```\```.

The citation section allows you to point your quote at pages and sources. The s1 means source 1, a means to include the author name, and 20-21 is a page range. Whether to include the author and or page number is context sensative. Other information is also dependent of MLA, APA, or Chicago.

For large quotations, we will use block quotes. Block quotes use ```>``` at the beginning of each line. Use the same citation formating as you would with short quotes.

### In text citations
If you need to refrence a work and you are not directly quoting something, before you end your sentence 

## Work Cited
While you don't have to make a work cited page, since the exporter will take care of that, you will need to know the metadata xml format for sources.

## Titles
Formatting of titles of works (not to be confused with the headers section above) is dependent of MLA, APA, or Chicago and what form of media they are. Titles should be handled like this```[s1]```.

## LaTeX
In addition to the EduScript syntax, you can also embed LaTeX syntax for math formulas and chem notation

## Images

## Links
