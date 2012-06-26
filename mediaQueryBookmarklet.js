// This work is licensed under a Creative Commons Attribution-ShareAlike 3.0 Unported License.
// javascript:var%20mqb%20=%20{init:%20function()%20{mqb.version%20=%20%271.3%27;mqb.mqList%20=%20[];mqb.matchMedia%20=%20window.matchMedia%20!==%20undefined;var%20bookmarklet%20=%20document.getElementById(%20%27sb-mediaQueryBookmarklet%27%20);if%20(%20bookmarklet%20)%20{document.body.removeChild(%20bookmarklet%20);}},appendDisplay:%20function()%20{mqb.display%20=%20document.createElement(%20%27div%27%20);var%20i,displayStyles%20=%20{color:%20%27#000%27,background:%20%27#fff%27,fontWeight:%20%27bold%27,opacity:%20%27.9%27,padding:%20%2715px%27,position:%20%27fixed%27,right:%20%270%27,top:%20%270%27,zIndex:%2099999},dimensionStyles%20=%20{fontSize:%20%2725px%27,textTransform:%20%27lowercase%27,borderBottom:%20%271px%20dashed%20#000%27,paddingBottom:%20%275px%27,marginBottom:%20%2710px%27},queryStyles%20=%20{fontSize:%20%2716px%27,textTransform:%20%27lowercase%27},linksContainerStyles%20=%20{fontSize:%20%2710px%27,marginTop:%20%2710px%27,textAlign:%20%27right%27},versionStyles%20=%20{color:%20%27#444%27,textTransform:%20%27lowercase%27,},closeButtonStyles%20=%20{color:%20%27#444%27,display:%20%27block%27,marginTop:%20%275px%27,textDecoration:%20%27none%27},positionButtonStyles%20=%20{color:%20%27#444%27,cursor:%20%27pointer%27,fontSize:%20%2713px%27},dimensionContainer%20=%20document.createElement(%20%27div%27%20),queryContainer%20=%20document.createElement(%20%27div%27%20),linksContainer%20=%20document.createElement(%20%27div%27%20),versionLink%20=%20document.createElement(%20%27a%27%20),closeButton%20=%20document.createElement(%20%27a%27%20);positionButton%20=%20document.createElement(%20%27a%27%20);mqb.display.className%20=%20%27sb-pageSize%27;mqb.display.id%20=%20%22sb-mediaQueryBookmarklet%22;dimensionContainer.className%20=%20%22sb-dimensions%22;queryContainer.className%20=%20%22sb-mq%22;versionLink.href%20=%20%27https://github.com/sparkbox/mediaQueryBookmarklet%27;versionLink.innerHTML%20=%20%27version%20%27%20+%20this.version;closeButton.href%20=%20%27.%27;closeButton.innerHTML%20=%20%27(close)%27;positionButton.innerHTML%20=%20%27%E2%87%A4%27;closeButton.addEventListener(%20%27click%27,%20function(%20e%20)%20{mqb.close(%20e%20);mqb%20=%20null;});positionButton.addEventListener(%20%27click%27,%20function(%20e%20)%20{if%20(%20mqb.display.style.left%20==%20%27auto%27%20)%20{mqb.display.style.right%20=%20%27auto%27;mqb.display.style.left%20=%200;positionButton.innerHTML%20=%20%27%E2%87%A5%27;}%20else%20{mqb.display.style.right%20=%200;mqb.display.style.left%20=%20%27auto%27;positionButton.innerHTML%20=%20%27%E2%87%A4%27;}});for%20(i%20in%20displayStyles)%20{mqb.display.style[i]%20=%20displayStyles[i];}for%20(i%20in%20dimensionStyles)%20{dimensionContainer.style[i]%20=%20dimensionStyles[i];}for%20(i%20in%20queryStyles)%20{queryContainer.style[i]%20=%20queryStyles[i];}for%20(i%20in%20linksContainerStyles)%20{linksContainer.style[i]%20=%20linksContainerStyles[i];}for%20(i%20in%20versionStyles)%20{versionLink.style[i]%20=%20versionStyles[i];}for%20(i%20in%20closeButtonStyles)%20{closeButton.style[i]%20=%20closeButtonStyles[i];}for%20(i%20in%20positionButtonStyles)%20{positionButton.style[i]%20=%20positionButtonStyles[i];}mqb.display.appendChild(%20dimensionContainer%20);mqb.display.appendChild(%20queryContainer%20);linksContainer.appendChild(%20versionLink%20);linksContainer.appendChild(%20closeButton%20);linksContainer.appendChild(%20positionButton%20);mqb.display.appendChild(%20linksContainer%20);document.body.appendChild(mqb.display);},close:%20function(%20e%20)%20{e.preventDefault();document.body.removeChild(%20mqb.display%20);},getMediaQueries:%20function()%20{var%20sheetList%20=%20document.styleSheets,ruleList,i,%20j,mediaQueries%20=%20[];for%20(i=sheetList.length-1;%20i%20>=%200;%20i--)%20{ruleList%20=%20sheetList[i].cssRules;if%20(ruleList)%20{for%20(j=0;%20j<ruleList.length;%20j++)%20{if%20(ruleList[j].type%20==%20CSSRule.MEDIA_RULE)%20{mediaQueries.push(ruleList[j].media.mediaText);}}}}return%20mediaQueries;},inList:%20function(%20media%20)%20{for%20(%20var%20i%20=%20this.mqList.length%20-%201;%20i%20>=%200;%20i--%20)%20{if%20(%20this.mqList[%20i%20].media%20===%20media%20)%20{return%20true;}}return%20false;},createMQList:%20function()%20{var%20mqs%20=%20this.getMediaQueries(),links%20=%20document.getElementsByTagName(%27link%27),i;for%20(%20i%20=%20mqs.length-1;%20i%20>=%200;%20i--%20)%20{if%20(%20!this.inList(%20mqs[i]%20)%20)%20{this.mqList.push(%20window.matchMedia(%20mqs[%20i%20]%20)%20);}}for%20(%20i%20=%20links.length-1;%20i%20>=%200;%20i--%20)%20{if%20(%20links[%20i%20].media%20!=%20%27%27%20)%20{this.mqList.push(%20window.matchMedia(%20links[%20i%20].media%20)%20);}}},showCurrentSize:%20function()%20{document.querySelectorAll(%27.sb-dimensions%27)[0].innerHTML%20=%20window.innerWidth%20+%20%27px%20x%20%27%20+%20window.innerHeight%20+%20%27px%27;},mqChange:%20function()%20{var%20html%20=%20%27%27;for%20(var%20i%20in%20mqb.mqList)%20{if%20(mqb.mqList[i].matches)%20{html%20+=%20mqb.mqList[i].media%20+%20%22<br>%22;}}document.querySelectorAll(%27.sb-mq%27)[0].innerHTML%20=%20html;},pageSize:%20function()%20{this.appendDisplay();window.addEventListener(%27resize%27,%20function()%20{mqb.showCurrentSize();if%20(mqb.matchMedia)%20{mqb.mqChange();}},%20false);}};mqb.init();if%20(mqb.matchMedia)%20{mqb.createMQList();}mqb.pageSize();mqb.showCurrentSize();if%20(mqb.matchMedia)%20{mqb.mqChange();}

var mqb = {

  init: function() {
    mqb.version = '1.3';
    mqb.mqList = [];
    mqb.matchMedia = window.matchMedia !== undefined;

    var bookmarklet = document.getElementById( 'sb-mediaQueryBookmarklet' );
    if ( bookmarklet ) {
      document.body.removeChild( bookmarklet );
    }
  },

  appendDisplay: function() {
    mqb.display = document.createElement( 'div' );

    var i,
    displayStyles = {
      color: '#000',
      background: '#fff',
      fontWeight: 'bold',
      opacity: '.9',
      padding: '15px',
      position: 'fixed',
      right: '0',
      top: '0',
      zIndex: 99999
    },
    dimensionStyles = {
      fontSize: '25px',
      textTransform: 'lowercase',
      borderBottom: '1px dashed #000',
      paddingBottom: '5px',
      marginBottom: '10px'
    },
    queryStyles = {
      fontSize: '16px',
      textTransform: 'lowercase'
    },
    linksContainerStyles = {
      fontSize: '10px',
      marginTop: '10px',
      textAlign: 'right'
    },
    versionStyles = {
      color: '#444',
      textTransform: 'lowercase',
    },
    closeButtonStyles = {
      color: '#444',
      display: 'block',
      marginTop: '5px',
      textDecoration: 'none'
    },
    positionButtonStyles = {
      color: '#444',
      cursor: 'pointer',
      fontSize: '13px'
    },
    dimensionContainer = document.createElement( 'div' ),
    queryContainer = document.createElement( 'div' ),
    linksContainer = document.createElement( 'div' ),
    versionLink = document.createElement( 'a' ),
    closeButton = document.createElement( 'a' );
    positionButton = document.createElement( 'a' );
    
    mqb.display.className = 'sb-pageSize';
    mqb.display.id = "sb-mediaQueryBookmarklet";
    dimensionContainer.className = "sb-dimensions";
    queryContainer.className = "sb-mq";
    versionLink.href = 'https://github.com/sparkbox/mediaQueryBookmarklet';      
    versionLink.innerHTML = 'version ' + this.version;
    closeButton.href = '.';
    closeButton.innerHTML = '(close)';
    positionButton.innerHTML = '⇤';

    closeButton.addEventListener( 'click', function( e ) {
      mqb.close( e );
      mqb = null;
    });

    // Quick and dirty. I'll clean it up later. I promise.
    positionButton.addEventListener( 'click', function( e ) {
      if ( mqb.display.style.left == 'auto' ) {
        mqb.display.style.right = 'auto';
        mqb.display.style.left = 0;
        positionButton.innerHTML = '⇥';
      } else {
        mqb.display.style.right = 0;
        mqb.display.style.left = 'auto';
        positionButton.innerHTML = '⇤';
      }
    });
    
    for (i in displayStyles) {
      mqb.display.style[i] = displayStyles[i];
    }
    for (i in dimensionStyles) {
      dimensionContainer.style[i] = dimensionStyles[i];
    }
    for (i in queryStyles) {
      queryContainer.style[i] = queryStyles[i];
    }
    for (i in linksContainerStyles) {
      linksContainer.style[i] = linksContainerStyles[i];
    }
    for (i in versionStyles) {
      versionLink.style[i] = versionStyles[i];
    }
    for (i in closeButtonStyles) {
      closeButton.style[i] = closeButtonStyles[i];
    }
    for (i in positionButtonStyles) {
      positionButton.style[i] = positionButtonStyles[i];
    }
    mqb.display.appendChild( dimensionContainer );
    mqb.display.appendChild( queryContainer );
    linksContainer.appendChild( versionLink );
    linksContainer.appendChild( closeButton );
    linksContainer.appendChild( positionButton );
    mqb.display.appendChild( linksContainer );

    document.body.appendChild(mqb.display);
  },

  close: function( e ) {
    e.preventDefault();

    document.body.removeChild( mqb.display );
  },
  
  getMediaQueries: function() {
    var sheetList = document.styleSheets,
        ruleList,
        i, j,
        mediaQueries = [];

    for (i=sheetList.length-1; i >= 0; i--) {
      ruleList = sheetList[i].cssRules;
      if (ruleList) {
        for (j=0; j<ruleList.length; j++) {
          if (ruleList[j].type == CSSRule.MEDIA_RULE) {
            mediaQueries.push(ruleList[j].media.mediaText);
          }
        }
      }
    }
    return mediaQueries;
  },
  
  inList: function( media ) {
    for ( var i = this.mqList.length - 1; i >= 0; i-- ) {
      if ( this.mqList[ i ].media === media ) {
        return true;
      }
    }
    return false;
  },

  createMQList: function() {
    var mqs = this.getMediaQueries(),
        links = document.getElementsByTagName('link'),
        i;
        
    for ( i = mqs.length-1; i >= 0; i-- ) {
      if ( !this.inList( mqs[i] ) ) {
        this.mqList.push( window.matchMedia( mqs[ i ] ) );
      }
    }
    
    for ( i = links.length-1; i >= 0; i-- ) {
      if ( links[ i ].media != '' ) {
        this.mqList.push( window.matchMedia( links[ i ].media ) );
      }
    }
  },
  
  showCurrentSize: function() {
    document.querySelectorAll('.sb-dimensions')[0].innerHTML = window.innerWidth + 'px x ' + window.innerHeight + 'px';
  },
  
  mqChange: function() {
    var html = '';
    
    for (var i in mqb.mqList) {
      if (mqb.mqList[i].matches) {
        html += mqb.mqList[i].media + "<br>";
      }
    }
    document.querySelectorAll('.sb-mq')[0].innerHTML = html;
  },  
  
  pageSize: function() {
    this.appendDisplay();
    
    window.addEventListener('resize', function() {
      mqb.showCurrentSize();
      if (mqb.matchMedia) {
        mqb.mqChange();
      }
    }, false);
  }

};

mqb.init();

if (mqb.matchMedia) {
  mqb.createMQList();
}
mqb.pageSize();
mqb.showCurrentSize();
if (mqb.matchMedia) {
  mqb.mqChange();
}
