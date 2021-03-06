(function(){var root = (typeof exports !== "undefined" && exports !== null) ? exports : this;

var entities = {
    '&nbsp;': '\u00a0',
    '&iexcl;': '\u00a1',
    '&cent;': '\u00a2',
    '&pound;': '\u00a3',
    '&euro;': '\u20ac',
    '&yen;': '\u00a5',
    '&brvbar;': '\u0160',
    '&sect;': '\u00a7',
    '&uml;': '\u0161',
    '&copy;': '\u00a9',
    '&ordf;': '\u00aa',
    '&laquo;': '\u00ab',
    '&not;': '\u00ac',
    '&shy;': '\u00ad',
    '&reg;': '\u00ae',
    '&macr;': '\u00af',
    '&deg;': '\u00b0',
    '&plusmn;': '\u00b1',
    '&sup2;': '\u00b2',
    '&sup3;': '\u00b3',
    '&acute;': '\u017d',
    '&micro;': '\u00b5',
    '&para;': '\u00b6',
    '&middot;': '\u00b7',
    '&cedil;': '\u017e',
    '&sup1;': '\u00b9',
    '&ordm;': '\u00ba',
    '&raquo;': '\u00bb',
    '&frac14;': '\u0152',
    '&frac12;': '\u00bd',
    '&frac34;': '\u0178',
    '&iquest;': '\u00bf',
    '&Agrave;': '\u00c0',
    '&Aacute;': '\u00c1',
    '&Acirc;': '\u00c2',
    '&Atilde;': '\u00c3',
    '&Auml;': '\u00c4',
    '&Aring;': '\u00c5',
    '&AElig;': '\u00c6',
    '&Ccedil;': '\u00c7',
    '&Egrave;': '\u00c8',
    '&Eacute;': '\u00c9',
    '&Ecirc;': '\u00ca',
    '&Euml;': '\u00cb',
    '&Igrave;': '\u00cc',
    '&Iacute;': '\u00cd',
    '&Icirc;': '\u00ce',
    '&Iuml;': '\u00cf',
    '&ETH;': '\u00d0',
    '&Ntilde;': '\u00d1',
    '&Ograve;': '\u00d2',
    '&Oacute;': '\u00d3',
    '&Ocirc;': '\u00d4',
    '&Otilde;': '\u00d5',
    '&Ouml;': '\u00d6',
    '&times;': '\u00d7',
    '&Oslash;': '\u00d8',
    '&Ugrave;': '\u00d9',
    '&Uacute;': '\u00da',
    '&Ucirc;': '\u00db',
    '&Uuml;': '\u00dc',
    '&Yacute;': '\u00dd',
    '&THORN;': '\u00de',
    '&szlig;': '\u00df',
    '&agrave;': '\u00e0',
    '&aacute;': '\u00e1',
    '&acirc;': '\u00e2',
    '&atilde;': '\u00e3',
    '&auml;': '\u00e4',
    '&aring;': '\u00e5',
    '&aelig;': '\u00e6',
    '&ccedil;': '\u00e7',
    '&egrave;': '\u00e8',
    '&eacute;': '\u00e9',
    '&ecirc;': '\u00ea',
    '&euml;': '\u00eb',
    '&igrave;': '\u00ec',
    '&iacute;': '\u00ed',
    '&icirc;': '\u00ee',
    '&iuml;': '\u00ef',
    '&eth;': '\u00f0',
    '&ntilde;': '\u00f1',
    '&ograve;': '\u00f2',
    '&oacute;': '\u00f3',
    '&ocirc;': '\u00f4',
    '&otilde;': '\u00f5',
    '&ouml;': '\u00f6',
    '&divide;': '\u00f7',
    '&oslash;': '\u00f8',
    '&ugrave;': '\u00f9',
    '&uacute;': '\u00fa',
    '&ucirc;': '\u00fb',
    '&uuml;': '\u00fc',
    '&yacute;': '\u00fd',
    '&thorn;': '\u00fe',
    '&yuml;': '\u00ff',
    '&quot;': '\u0022',
    '&lt;': '\u003c',
    '&gt;': '\u003e',
    '&apos;': '\u0027',
    '&minus;': '\u2212',
    '&circ;': '\u02c6',
    '&tilde;': '\u02dc',
    '&Scaron;': '\u0160',
    '&lsaquo;': '\u2039',
    '&OElig;': '\u0152',
    '&lsquo;': '\u2018',
    '&rsquo;': '\u2019',
    '&ldquo;': '\u201c',
    '&rdquo;': '\u201d',
    '&bull;': '\u2022',
    '&ndash;': '\u2013',
    '&mdash;': '\u2014',
    '&trade;': '\u2122',
    '&scaron;': '\u0161',
    '&rsaquo;': '\u203a',
    '&oelig;': '\u0153',
    '&Yuml;': '\u0178',
    '&fnof;': '\u0192',
    '&Alpha;': '\u0391',
    '&Beta;': '\u0392',
    '&Gamma;': '\u0393',
    '&Delta;': '\u0394',
    '&Epsilon;': '\u0395',
    '&Zeta;': '\u0396',
    '&Eta;': '\u0397',
    '&Theta;': '\u0398',
    '&Iota;': '\u0399',
    '&Kappa;': '\u039a',
    '&Lambda;': '\u039b',
    '&Mu;': '\u039c',
    '&Nu;': '\u039d',
    '&Xi;': '\u039e',
    '&Omicron;': '\u039f',
    '&Pi;': '\u03a0',
    '&Rho;': '\u03a1',
    '&Sigma;': '\u03a3',
    '&Tau;': '\u03a4',
    '&Upsilon;': '\u03a5',
    '&Phi;': '\u03a6',
    '&Chi;': '\u03a7',
    '&Psi;': '\u03a8',
    '&Omega;': '\u03a9',
    '&alpha;': '\u03b1',
    '&beta;': '\u03b2',
    '&gamma;': '\u03b3',
    '&delta;': '\u03b4',
    '&epsilon;': '\u03b5',
    '&zeta;': '\u03b6',
    '&eta;': '\u03b7',
    '&theta;': '\u03b8',
    '&iota;': '\u03b9',
    '&kappa;': '\u03ba',
    '&lambda;': '\u03bb',
    '&mu;': '\u03bc',
    '&nu;': '\u03bd',
    '&xi;': '\u03be',
    '&omicron;': '\u03bf',
    '&pi;': '\u03c0',
    '&rho;': '\u03c1',
    '&sigmaf;': '\u03c2',
    '&sigma;': '\u03c3',
    '&tau;': '\u03c4',
    '&upsilon;': '\u03c5',
    '&phi;': '\u03c6',
    '&chi;': '\u03c7',
    '&psi;': '\u03c8',
    '&omega;': '\u03c9',
    '&thetasym;': '\u03d1',
    '&upsih;': '\u03d2',
    '&piv;': '\u03d6',
    '&ensp;': '\u2002',
    '&emsp;': '\u2003',
    '&thinsp;': '\u2009',
    '&zwnj;': '\u200c',
    '&zwj;': '\u200d',
    '&lrm;': '\u200e',
    '&rlm;': '\u200f',
    '&sbquo;': '\u201a',
    '&bdquo;': '\u201e',
    '&dagger;': '\u2020',
    '&Dagger;': '\u2021',
    '&hellip;': '\u2026',
    '&permil;': '\u2030',
    '&prime;': '\u2032',
    '&Prime;': '\u2033',
    '&oline;': '\u203e',
    '&frasl;': '\u2044',
    '&image;': '\u2111',
    '&weierp;': '\u2118',
    '&real;': '\u211c',
    '&alefsym;': '\u2135',
    '&larr;': '\u2190',
    '&uarr;': '\u2191',
    '&rarr;': '\u2192',
    '&darr;': '\u2193',
    '&harr;': '\u2194',
    '&crarr;': '\u21b5',
    '&lArr;': '\u21d0',
    '&uArr;': '\u21d1',
    '&rArr;': '\u21d2',
    '&dArr;': '\u21d3',
    '&hArr;': '\u21d4',
    '&forall;': '\u2200',
    '&part;': '\u2202',
    '&exist;': '\u2203',
    '&empty;': '\u2205',
    '&nabla;': '\u2207',
    '&isin;': '\u2208',
    '&notin;': '\u2209',
    '&ni;': '\u220b',
    '&prod;': '\u220f',
    '&sum;': '\u2211',
    '&lowast;': '\u2217',
    '&radic;': '\u221a',
    '&prop;': '\u221d',
    '&infin;': '\u221e',
    '&ang;': '\u2220',
    '&and;': '\u2227',
    '&or;': '\u2228',
    '&cap;': '\u2229',
    '&cup;': '\u222a',
    '&int;': '\u222b',
    '&there4;': '\u2234',
    '&sim;': '\u223c',
    '&cong;': '\u2245',
    '&asymp;': '\u2248',
    '&ne;': '\u2260',
    '&equiv;': '\u2261',
    '&le;': '\u2264',
    '&ge;': '\u2265',
    '&sub;': '\u2282',
    '&sup;': '\u2283',
    '&nsub;': '\u2284',
    '&sube;': '\u2286',
    '&supe;': '\u2287',
    '&oplus;': '\u2295',
    '&otimes;': '\u2297',
    '&perp;': '\u22a5',
    '&sdot;': '\u22c5',
    '&lceil;': '\u2308',
    '&rceil;': '\u2309',
    '&lfloor;': '\u230a',
    '&rfloor;': '\u230b',
    '&lang;': '\u2329',
    '&rang;': '\u232a',
    '&loz;': '\u25ca',
    '&spades;': '\u2660',
    '&clubs;': '\u2663',
    '&hearts;': '\u2665',
    '&diams;': '\u2666'
};


var html_entity_decode = function (str) {
    if (!~str.indexOf('&')) return str;

    //Decode literal entities
    for (var i in entities) {
        str = str.replace(new RegExp(i, 'g'), entities[i]);
    }

    //Decode hex entities
    str = str.replace(/&#x(0*[0-9a-f]{2,5});?/gi, function (m, code) {
        return String.fromCharCode(parseInt(+code, 16));
    });

    //Decode numeric entities
    str = str.replace(/&#([0-9]{2,4});?/gi, function (m, code) {
        return String.fromCharCode(+code);
    });

    str = str.replace(/&amp;/g, '&');

    return str;
};

var never_allowed_str = {
    'document.cookie':              '[removed]',
    'document.write':               '[removed]',
    '.parentNode':                  '[removed]',
    '.innerHTML':                   '[removed]',
    'window.location':              '[removed]',
    '-moz-binding':                 '[removed]',
    '<!--':                         '&lt;!--',
    '-->':                          '--&gt;',
    '(<!\\[CDATA\\[)':              '&lt;![CDATA[',
    '<comment>':                    '&lt;comment&gt;'
};

var never_allowed_regex = {
    'javascript\\s*:':                                       '[removed]',
    'expression\\s*(\\(|&#40;)':                             '[removed]',
    'vbscript\\s*:':                                         '[removed]',
    'Redirect\\s+302':                                       '[removed]',
    "([\"'])?data\\s*:[^\\1]*?base64[^\\1]*?,[^\\1]*?\\1?":  '[removed]'
};

var non_displayables = [
    /%0[0-8bcef]/g,           // url encoded 00-08, 11, 12, 14, 15
    /%1[0-9a-f]/g,            // url encoded 16-31
    /[\x00-\x08]/g,           // 00-08
    /\x0b/g, /\x0c/g,         // 11,12
    /[\x0e-\x1f]/g            // 14-31
];

var compact_words = [
    'javascript', 'expression', 'vbscript',
    'script', 'base64', 'applet', 'alert',
    'document', 'write', 'cookie', 'window'
];

root.xssClean = function(str, is_image) {

    //Remove invisible characters
    str = remove_invisible_characters(str);

    //Protect query string variables in URLs => 901119URL5918AMP18930PROTECT8198
    var hash;
    do {
      // ensure str does not contain hash before inserting it
      hash = xss_hash();
    } while(str.indexOf(hash) >= 0)
    str = str.replace(/\&([a-z\_0-9\-]+)\=([a-z\_0-9\-]+)/ig, hash + '$1=$2');

    //Validate standard character entities. Add a semicolon if missing.  We do this to enable
    //the conversion of entities to ASCII later.
    str = str.replace(/(&#?[0-9a-z]{2,})([\x00-\x20])*;?/ig, '$1;$2');

    //Validate UTF16 two byte encoding (x00) - just as above, adds a semicolon if missing.
    str = str.replace(/(&#x?)([0-9A-F]+);?/ig, '$1$2;');

    //Un-protect query string variables
    str = str.replace(new RegExp(hash, 'g'), '&');

    //Decode just in case stuff like this is submitted:
    //<a href="http://%77%77%77%2E%67%6F%6F%67%6C%65%2E%63%6F%6D">Google</a>
    try{
      str = decodeURIComponent(str);
    }
    catch(error){
      // str was not actually URI-encoded
    }

    //Convert character entities to ASCII - this permits our tests below to work reliably.
    //We only convert entities that are within tags since these are the ones that will pose security problems.
    str = str.replace(/[a-z]+=([\'\"]).*?\1/gi, function(m, match) {
        return m.replace(match, convert_attribute(match));
    });
    str = str.replace(/<\w+.*/gi, function(m) {
        return m.replace(m, html_entity_decode(m));
    });

    //Remove invisible characters again
    str = remove_invisible_characters(str);

    //Convert tabs to spaces
    str = str.replace('\t', ' ');

    //Captured the converted string for later comparison
    var converted_string = str;

    //Remove strings that are never allowed
    for (var i in never_allowed_str) {
        str = str.replace(new RegExp(i, "gi"), never_allowed_str[i]);
    }

    //Remove regex patterns that are never allowed
    for (var i in never_allowed_regex) {
        str = str.replace(new RegExp(i, 'gi'), never_allowed_regex[i]);
    }

    //Compact any exploded words like:  j a v a s c r i p t
    // We only want to do this when it is followed by a non-word character
    for (var i = 0, l = compact_words.length; i < l; i++) {
        var spacified = compact_words[i].split('').join('\\s*')+'\\s*';

        str = str.replace(new RegExp('('+spacified+')(\\W)', 'ig'), function(m, compat, after) {
            return compat.replace(/\s+/g, '') + after;
        });
    }

    //Remove disallowed Javascript in links or img tags
    do {
        var original = str;

        if (str.match(/<a/i)) {
            str = str.replace(/<a\s+([^>]*?)(>|$)/gi, function(m, attributes, end_tag) {
                var filtered_attributes = filter_attributes(attributes.replace('<','').replace('>',''));
                filtered_attributes = filtered_attributes.replace(/href=.*?(?:alert\(|alert&#40;|javascript:|livescript:|mocha:|charset=|window\.|document\.|\.cookie|<script|<xss|data\s*:)/gi, '');
                return m.replace(attributes, filtered_attributes);
            });
        }

        if (str.match(/<img/i)) {
            str = str.replace(/<img\s+([^>]*?)(\s?\/?>|$)/gi, function(m, attributes, end_tag) {
                var filtered_attributes = filter_attributes(attributes.replace('<','').replace('>',''));
                filtered_attributes = filtered_attributes.replace(/src=.*?(?:alert\(|alert&#40;|javascript:|livescript:|mocha:|charset=|window\.|document\.|\.cookie|<script|<xss|base64\s*,)/gi, '');
                return m.replace(attributes, filtered_attributes);
            });
        }

        if (str.match(/script/i) || str.match(/xss/i)) {
            str = str.replace(/<(\/*)(script|xss)(.*?)\>/gi, '[removed]');
        }

    } while(original !== str);

    // Remove Evil HTML Attributes (like event handlers and style)
    var event_handlers = ['\\bon\\w*', '\\bstyle', '\\bformaction'];

    //Adobe Photoshop puts XML metadata into JFIF images, including namespacing,
    //so we have to allow this for images
    if (!is_image) {
        event_handlers.push('xmlns');
    }

    do {
        var attribs = [];
        var count = 0;

        attribs = attribs.concat(str.match(new RegExp("("+event_handlers.join('|')+")\\s*=\\s*(\\x22|\\x27)([^\\2]*?)(\\2)", 'ig')));
        attribs = attribs.concat(str.match(new RegExp("("+event_handlers.join('|')+")\\s*=\\s*([^\\s>]*)", 'ig')));
        attribs = attribs.filter(function(element) { return element !== null; });

        if (attribs.length > 0) {
            for (var i = 0; i < attribs.length; ++i) {
                attribs[i] = attribs[i].replace(new RegExp('[.\\\\+*?\\[\\^\\]$(){}=!<>|:\\-]', 'g'), '\\$&')
            }

            str = str.replace(new RegExp("(<?)(\/?[^><]+?)([^A-Za-z<>\\-])(.*?)("+attribs.join('|')+")(.*?)([\\s><]?)([><]*)", 'i'), function(m, a, b, c, d, e, f, g, h) {
                ++count;
                return a + b + ' ' + d + f + g + h;
            });
        }
    } while (count > 0);

    //Sanitize naughty HTML elements
    //If a tag containing any of the words in the list
    //below is found, the tag gets converted to entities.
    //So this: <blink>
    //Becomes: &lt;blink&gt;
    var naughty = 'alert|applet|audio|basefont|base|behavior|bgsound|blink|body|embed|expression|form|frameset|frame|head|html|ilayer|iframe|input|isindex|layer|link|meta|object|plaintext|style|script|textarea|title|video|xml|xss';
    str = str.replace(new RegExp('<(/*\\s*)('+naughty+')([^><]*)([><]*)', 'gi'), function(m, a, b, c, d) {
        return '&lt;' + a + b + c + d.replace('>','&gt;').replace('<','&lt;');
    });

    //Sanitize naughty scripting elements Similar to above, only instead of looking for
    //tags it looks for PHP and JavaScript commands that are disallowed.  Rather than removing the
    //code, it simply converts the parenthesis to entities rendering the code un-executable.
    //For example:    eval('some code')
    //Becomes:        eval&#40;'some code'&#41;
    str = str.replace(/(alert|cmd|passthru|eval|exec|expression|system|fopen|fsockopen|file|file_get_contents|readfile|unlink)(\s*)\((.*?)\)/gi, '$1$2&#40;$3&#41;');

    //This adds a bit of extra precaution in case something got through the above filters
    for (var i in never_allowed_str) {
        str = str.replace(new RegExp(i, "gi"), never_allowed_str[i]);
    }
    for (var i in never_allowed_regex) {
        str = str.replace(new RegExp(i, 'gi'), never_allowed_regex[i]);
    }

    //Images are handled in a special way
    if (is_image && str !== converted_string) {
        throw new Error('Image may contain XSS');
    }

    return str;
}

function remove_invisible_characters(str) {
    for (var i = 0, l = non_displayables.length; i < l; i++) {
        str = str.replace(non_displayables[i], '');
    }
    return str;
}

function xss_hash() {
    var str = '', num = 10;
    while (num--) str += String.fromCharCode(Math.random() * 25 | 97);
    return str;
}

function convert_attribute(str) {
    return str.replace('>','&gt;').replace('<','&lt;').replace('\\','\\\\');
}

function filter_attributes(str) {
    var result = "";

    var match = str.match(/\s*[a-z-]+\s*=\s*(\x22|\x27)([^\1]*?)\1/ig);
    if (match) {
        for (var i = 0; i < match.length; ++i) {
            result += match[i].replace(/\*.*?\*/g, '');
        }
    }

    return result;
}


}).call(this);
