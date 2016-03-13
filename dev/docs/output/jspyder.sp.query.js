Ext.data.JsonP.jspyder_sp_query({"tagname":"class","name":"jspyder.sp.query","autodetected":{},"files":[{"filename":"js-sp.js","href":"js-sp.html#jspyder-sp-query"}],"extends":"jspyder.sp","members":[{"name":"_list","tagname":"property","owner":"jspyder.sp.query","id":"property-_list","meta":{"private":true}},{"name":"_rows","tagname":"property","owner":"jspyder.sp.query","id":"property-_rows","meta":{"private":true}},{"name":"__parseRows","tagname":"method","owner":"jspyder.sp.query","id":"method-__parseRows","meta":{"chainable":true,"private":true}},{"name":"_sum","tagname":"method","owner":"jspyder.sp.query","id":"method-_sum","meta":{"private":true}},{"name":"_sumColumns","tagname":"method","owner":"jspyder.sp.query","id":"method-_sumColumns","meta":{"private":true}},{"name":"_sumRows","tagname":"method","owner":"jspyder.sp.query","id":"method-_sumRows","meta":{"private":true}},{"name":"clone","tagname":"method","owner":"jspyder.sp.query","id":"method-clone","meta":{}},{"name":"data","tagname":"method","owner":"jspyder.sp.query","id":"method-data","meta":{"chainable":true}},{"name":"each","tagname":"method","owner":"jspyder.sp.query","id":"method-each","meta":{"chainable":true}},{"name":"excludes","tagname":"method","owner":"jspyder.sp.query","id":"method-excludes","meta":{"chainable":true}},{"name":"exportValues","tagname":"method","owner":"jspyder.sp.query","id":"method-exportValues","meta":{}},{"name":"filter","tagname":"method","owner":"jspyder.sp.query","id":"method-filter","meta":{"chainable":true}},{"name":"filters","tagname":"method","owner":"jspyder.sp.query","id":"method-filters","meta":{"chainable":true}},{"name":"getValues","tagname":"method","owner":"jspyder.sp.query","id":"method-getValues","meta":{"chainable":true}},{"name":"reset","tagname":"method","owner":"jspyder.sp.query","id":"method-reset","meta":{"chainable":true}},{"name":"sort","tagname":"method","owner":"jspyder.sp.query","id":"method-sort","meta":{"chainable":true}},{"name":"sum","tagname":"method","owner":"jspyder.sp.query","id":"method-sum","meta":{"chainable":true}},{"name":"toCsvString","tagname":"method","owner":"jspyder.sp.query","id":"method-toCsvString","meta":{}},{"name":"toExcelString","tagname":"method","owner":"jspyder.sp.query","id":"method-toExcelString","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-jspyder.sp.query","short_doc":"This class should not generally be directly created in scripts. ...","component":false,"superclasses":["jspyder.sp"],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/jspyder.sp' rel='jspyder.sp' class='docClass'>jspyder.sp</a><div class='subclass '><strong>jspyder.sp.query</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/js-sp.html#jspyder-sp-query' target='_blank'>js-sp.js</a></div></pre><div class='doc-contents'><p>This class should not generally be directly created in scripts. Instead,\nit should be either created by a call to <a href=\"#!/api/jspyder.sp.list-method-query\" rel=\"jspyder.sp.list-method-query\" class=\"docClass\">jspyder.sp.list.query</a>() or a\ncall to <a href=\"#!/api/jspyder.sp.query-method-clone\" rel=\"jspyder.sp.query-method-clone\" class=\"docClass\">jspyder.sp.query.clone</a> in order to ensure that it was properly\nconfigured at creation and before use.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-_list' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='jspyder.sp.query'>jspyder.sp.query</span><br/><a href='source/js-sp.html#jspyder-sp-query-property-_list' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jspyder.sp.query-property-_list' class='name expandable'>_list</a> : Object<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'><p>Overwritten at creation.</p>\n</div><div class='long'><p>Overwritten at creation.</p>\n</div></div></div><div id='property-_rows' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='jspyder.sp.query'>jspyder.sp.query</span><br/><a href='source/js-sp.html#jspyder-sp-query-property-_rows' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jspyder.sp.query-property-_rows' class='name expandable'>_rows</a> : Object<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'><p>Overwritten at creation and reset.</p>\n</div><div class='long'><p>Overwritten at creation and reset.</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-__parseRows' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='jspyder.sp.query'>jspyder.sp.query</span><br/><a href='source/js-sp.html#jspyder-sp-query-method-__parseRows' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jspyder.sp.query-method-__parseRows' class='name expandable'>__parseRows</a>( <span class='pre'>value, id, _rows, filterData</span> ) : <a href=\"#!/api/jspyder.sp.query\" rel=\"jspyder.sp.query\" class=\"docClass\">jspyder.sp.query</a><span class=\"signature\"><span class='chainable' >chainable</span><span class='private' >private</span></span></div><div class='description'><div class='short'>Separated from jspyder.sp.query.filter for memory efficiency. ...</div><div class='long'><p>Separated from <a href=\"#!/api/jspyder.sp.query-method-filter\" rel=\"jspyder.sp.query-method-filter\" class=\"docClass\">jspyder.sp.query.filter</a> for memory efficiency.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>value</span> : Object<div class='sub-desc'><p>Row from this._rows</p>\n</div></li><li><span class='pre'>id</span> : Number<div class='sub-desc'><p>Row index from row</p>\n</div></li><li><span class='pre'>_rows</span> : Array<div class='sub-desc'><p>this._rows</p>\n</div></li><li><span class='pre'>filterData</span> : Object<div class='sub-desc'><p>Collection of filters.  See <a href=\"#!/api/jspyder.sp.query-method-filter\" rel=\"jspyder.sp.query-method-filter\" class=\"docClass\">jspyder.sp.query.filter</a></p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/jspyder.sp.query\" rel=\"jspyder.sp.query\" class=\"docClass\">jspyder.sp.query</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-_sum' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='jspyder.sp.query'>jspyder.sp.query</span><br/><a href='source/js-sp.html#jspyder-sp-query-method-_sum' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jspyder.sp.query-method-_sum' class='name expandable'>_sum</a>( <span class='pre'>column, key, columns</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>column</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>key</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>columns</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-_sumColumns' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='jspyder.sp.query'>jspyder.sp.query</span><br/><a href='source/js-sp.html#jspyder-sp-query-method-_sumColumns' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jspyder.sp.query-method-_sumColumns' class='name expandable'>_sumColumns</a>( <span class='pre'>value, colName, _, out</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>value</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>colName</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>_</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>out</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-_sumRows' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='jspyder.sp.query'>jspyder.sp.query</span><br/><a href='source/js-sp.html#jspyder-sp-query-method-_sumRows' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jspyder.sp.query-method-_sumRows' class='name expandable'>_sumRows</a>( <span class='pre'>row, _, rows, columns</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>row</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>_</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>rows</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>columns</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-clone' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='jspyder.sp.query'>jspyder.sp.query</span><br/><a href='source/js-sp.html#jspyder-sp-query-method-clone' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jspyder.sp.query-method-clone' class='name expandable'>clone</a>( <span class='pre'></span> ) : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>Creates a copy of the jspyder.sp.query object; pointing to the same\njspyder.sp.list object, but with its own context ...</div><div class='long'><p>Creates a copy of the <a href=\"#!/api/jspyder.sp.query\" rel=\"jspyder.sp.query\" class=\"docClass\">jspyder.sp.query</a> object; pointing to the same\n<a href=\"#!/api/jspyder.sp.list\" rel=\"jspyder.sp.list\" class=\"docClass\">jspyder.sp.list</a> object, but with its own context of data copied from\nthe current cache.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p><a href=\"#!/api/jspyder.sp.query\" rel=\"jspyder.sp.query\" class=\"docClass\">jspyder.sp.query</a> object clone.</p>\n</div></li></ul></div></div></div><div id='method-data' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='jspyder.sp.query'>jspyder.sp.query</span><br/><a href='source/js-sp.html#jspyder-sp-query-method-data' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jspyder.sp.query-method-data' class='name expandable'>data</a>( <span class='pre'>fn</span> ) : <a href=\"#!/api/jspyder.sp.query\" rel=\"jspyder.sp.query\" class=\"docClass\">jspyder.sp.query</a><span class=\"signature\"><span class='chainable' >chainable</span></span></div><div class='description'><div class='short'>Retrieves all stored data, and runs the function defined by [fn]\nwith the context [this] and the parameter pointing t...</div><div class='long'><p>Retrieves all stored data, and runs the function defined by [fn]\nwith the context [this] and the parameter pointing to a copy of the\ndata set.  Note that any changes to the array will mark the row for\nchange in the owning list.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>fn</span> : Function<div class='sub-desc'><p>Function to execute, with the context of the <a href=\"#!/api/jspyder.sp.query\" rel=\"jspyder.sp.query\" class=\"docClass\">jspyder.sp.query</a>\n     object, and the first argument being the stored row references\n     as an array.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/jspyder.sp.query\" rel=\"jspyder.sp.query\" class=\"docClass\">jspyder.sp.query</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-each' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='jspyder.sp.query'>jspyder.sp.query</span><br/><a href='source/js-sp.html#jspyder-sp-query-method-each' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jspyder.sp.query-method-each' class='name expandable'>each</a>( <span class='pre'>fn</span> ) : <a href=\"#!/api/jspyder.sp.query\" rel=\"jspyder.sp.query\" class=\"docClass\">jspyder.sp.query</a><span class=\"signature\"><span class='chainable' >chainable</span></span></div><div class='description'><div class='short'>Iterates through all of the rows in this query ...</div><div class='long'><p>Iterates through all of the rows in this query</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>fn</span> : Function<div class='sub-desc'><p>Function to iterate with, where the first parameter\n     is the row, the second parameter is the row index, the\n     third parameter is the row list, and the fourth parameter\n     is the query object.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/jspyder.sp.query\" rel=\"jspyder.sp.query\" class=\"docClass\">jspyder.sp.query</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-excludes' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='jspyder.sp.query'>jspyder.sp.query</span><br/><a href='source/js-sp.html#jspyder-sp-query-method-excludes' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jspyder.sp.query-method-excludes' class='name expandable'>excludes</a>( <span class='pre'>filterArray</span> ) : <a href=\"#!/api/jspyder.sp.query\" rel=\"jspyder.sp.query\" class=\"docClass\">jspyder.sp.query</a><span class=\"signature\"><span class='chainable' >chainable</span></span></div><div class='description'><div class='short'>The opposite of js.sp.query.filters, this function performs a filter\nand EXCLUDES all of the rows that match the spec...</div><div class='long'><p>The opposite of js.sp.query.filters, this function performs a filter\nand EXCLUDES all of the rows that match the specified criteria.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>filterArray</span> : Array<div class='sub-desc'><p>Array of filter collections</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/jspyder.sp.query\" rel=\"jspyder.sp.query\" class=\"docClass\">jspyder.sp.query</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-exportValues' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='jspyder.sp.query'>jspyder.sp.query</span><br/><a href='source/js-sp.html#jspyder-sp-query-method-exportValues' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jspyder.sp.query-method-exportValues' class='name expandable'>exportValues</a>( <span class='pre'>columns</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Copies all of the values from the rows in the query into the object\nprovided and returns the first parameter. ...</div><div class='long'><p>Copies all of the values from the rows in the query into the object\nprovided and returns the first parameter.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>columns</span> : Object<div class='sub-desc'><p>A collection where keys correspond to the columns to retrieve\n     values from.</p>\n</div></li></ul></div></div></div><div id='method-filter' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='jspyder.sp.query'>jspyder.sp.query</span><br/><a href='source/js-sp.html#jspyder-sp-query-method-filter' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jspyder.sp.query-method-filter' class='name expandable'>filter</a>( <span class='pre'>filterData</span> ) : <a href=\"#!/api/jspyder.sp.query\" rel=\"jspyder.sp.query\" class=\"docClass\">jspyder.sp.query</a><span class=\"signature\"><span class='chainable' >chainable</span></span></div><div class='description'><div class='short'>Applies a single filter against the data stored in the cache. ...</div><div class='long'><p>Applies a single filter against the data stored in the cache.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>filterData</span> : Object<div class='sub-desc'><p>A filter definition, with the following property set:\n      - column: Required.  Name of the column being filtered.\n      - geq:  \"Field value >= this.geq\"       (3 >= 3)\n      - leq:  \"Field value &lt;= this.leq\"       (3 &lt;= 3)\n      - gt:   \"Field value > this.gt\"         (3 > 2)\n      - lt:   \"Field value &lt; this.lt\"         (3 &lt; 4)\n      - eq:   \"Field value == this.eq\"        (3 == \"3\")\n      - seq:  \"Field value === this.seq\"      (3 === 3)\n      - neq:  \"Field value != this.neq\"       (3 != 4)\n      - snq:  \"Field value !== this.snq\"      (3 !== \"3\")\n      - test: \"Field value matches this.test\" (/^3/.test(3000))</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/jspyder.sp.query\" rel=\"jspyder.sp.query\" class=\"docClass\">jspyder.sp.query</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-filters' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='jspyder.sp.query'>jspyder.sp.query</span><br/><a href='source/js-sp.html#jspyder-sp-query-method-filters' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jspyder.sp.query-method-filters' class='name expandable'>filters</a>( <span class='pre'>filterArray</span> ) : <a href=\"#!/api/jspyder.sp.query\" rel=\"jspyder.sp.query\" class=\"docClass\">jspyder.sp.query</a><span class=\"signature\"><span class='chainable' >chainable</span></span></div><div class='description'><div class='short'>Applies a set of filters against the data stored in the cache. ...</div><div class='long'><p>Applies a set of filters against the data stored in the cache. Due\nto the nature of the filtering algorithm, this is the more efficient\nof the two methods, as it requires fewer passes to apply multiple\nfilters.  (See: <a href=\"#!/api/jspyder.sp.query-method-filter\" rel=\"jspyder.sp.query-method-filter\" class=\"docClass\">jspyder.sp.query.filter</a>)</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>filterArray</span> : Array<div class='sub-desc'><p>Array of filter collections</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/jspyder.sp.query\" rel=\"jspyder.sp.query\" class=\"docClass\">jspyder.sp.query</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-getValues' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='jspyder.sp.query'>jspyder.sp.query</span><br/><a href='source/js-sp.html#jspyder-sp-query-method-getValues' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jspyder.sp.query-method-getValues' class='name expandable'>getValues</a>( <span class='pre'>columns, fn</span> ) : <a href=\"#!/api/jspyder.sp.query\" rel=\"jspyder.sp.query\" class=\"docClass\">jspyder.sp.query</a><span class=\"signature\"><span class='chainable' >chainable</span></span></div><div class='description'><div class='short'>Copies all of the values from the rows in the query into the object\nprovided. ...</div><div class='long'><p>Copies all of the values from the rows in the query into the object\nprovided.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>columns</span> : Object<div class='sub-desc'><p>A collection where keys correspond to the columns to retrieve\n     values from.</p>\n</div></li><li><span class='pre'>fn</span> : Function<div class='sub-desc'><p>The function to execute with the exported values</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/jspyder.sp.query\" rel=\"jspyder.sp.query\" class=\"docClass\">jspyder.sp.query</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-reset' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='jspyder.sp.query'>jspyder.sp.query</span><br/><a href='source/js-sp.html#jspyder-sp-query-method-reset' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jspyder.sp.query-method-reset' class='name expandable'>reset</a>( <span class='pre'></span> ) : <a href=\"#!/api/jspyder.sp.query\" rel=\"jspyder.sp.query\" class=\"docClass\">jspyder.sp.query</a><span class=\"signature\"><span class='chainable' >chainable</span></span></div><div class='description'><div class='short'>Resets the query object to include all of the available rows in the\nassociated list's cache. ...</div><div class='long'><p>Resets the query object to include all of the available rows in the\nassociated list's cache.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/jspyder.sp.query\" rel=\"jspyder.sp.query\" class=\"docClass\">jspyder.sp.query</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-sort' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='jspyder.sp.query'>jspyder.sp.query</span><br/><a href='source/js-sp.html#jspyder-sp-query-method-sort' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jspyder.sp.query-method-sort' class='name expandable'>sort</a>( <span class='pre'>field, asc</span> ) : <a href=\"#!/api/jspyder.sp.query\" rel=\"jspyder.sp.query\" class=\"docClass\">jspyder.sp.query</a><span class=\"signature\"><span class='chainable' >chainable</span></span></div><div class='description'><div class='short'>Sorts the rows in this query based on values, based on user-defined\ncriteria. ...</div><div class='long'><p>Sorts the rows in this query based on values, based on user-defined\ncriteria.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>field</span> : String<div class='sub-desc'><p>Field name to sort by</p>\n</div></li><li><span class='pre'>asc</span> : Boolean<div class='sub-desc'><p>TRUE in order to sort ascending, FALSE in order to sort\n     descending.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/jspyder.sp.query\" rel=\"jspyder.sp.query\" class=\"docClass\">jspyder.sp.query</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-sum' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='jspyder.sp.query'>jspyder.sp.query</span><br/><a href='source/js-sp.html#jspyder-sp-query-method-sum' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jspyder.sp.query-method-sum' class='name expandable'>sum</a>( <span class='pre'>columns, fn</span> ) : <a href=\"#!/api/jspyder.sp.query\" rel=\"jspyder.sp.query\" class=\"docClass\">jspyder.sp.query</a><span class=\"signature\"><span class='chainable' >chainable</span></span></div><div class='description'><div class='short'>Retrieves the sum of all of the stored data, if it is numerical. ...</div><div class='long'><p>Retrieves the sum of all of the stored data, if it is numerical.\nIt not numerical, then makes no change to the default value\nprovided.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>columns</span> : Object<div class='sub-desc'><p>Object using column names (See: <a href=\"#!/api/jspyder.sp.list\" rel=\"jspyder.sp.list\" class=\"docClass\">jspyder.sp.list</a>) as the keys.\n     Values are pushed into the object, and then [fn] is executed,\n     with the context of the <a href=\"#!/api/jspyder.sp.query\" rel=\"jspyder.sp.query\" class=\"docClass\">jspyder.sp.query</a> object, and the\n     [columns] object as the first argument.</p>\n</div></li><li><span class='pre'>fn</span> : Function<div class='sub-desc'><p>A callback function, using the <a href=\"#!/api/jspyder.sp.query\" rel=\"jspyder.sp.query\" class=\"docClass\">jspyder.sp.query</a> object as the\n     context, and the columns object as the first argument.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/jspyder.sp.query\" rel=\"jspyder.sp.query\" class=\"docClass\">jspyder.sp.query</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-toCsvString' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='jspyder.sp.query'>jspyder.sp.query</span><br/><a href='source/js-sp.html#jspyder-sp-query-method-toCsvString' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jspyder.sp.query-method-toCsvString' class='name expandable'>toCsvString</a>( <span class='pre'>columns</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Converts the jspyder.sp.query data to a Comma-Separated Value (CSV)\nstring. ...</div><div class='long'><p>Converts the <a href=\"#!/api/jspyder.sp.query\" rel=\"jspyder.sp.query\" class=\"docClass\">jspyder.sp.query</a> data to a Comma-Separated Value (CSV)\nstring.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>columns</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-toExcelString' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='jspyder.sp.query'>jspyder.sp.query</span><br/><a href='source/js-sp.html#jspyder-sp-query-method-toExcelString' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jspyder.sp.query-method-toExcelString' class='name expandable'>toExcelString</a>( <span class='pre'>name, columns</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Converts the jspyder.sp.query data to an Excel-ready XML string. ...</div><div class='long'><p>Converts the <a href=\"#!/api/jspyder.sp.query\" rel=\"jspyder.sp.query\" class=\"docClass\">jspyder.sp.query</a> data to an Excel-ready XML string.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>columns</span> : Object<div class='sub-desc'></div></li></ul></div></div></div></div></div></div></div>","meta":{}});