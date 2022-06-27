class Formatter {
  //add static methods here

  static capitalize(string) {
    // capitalizes first letter
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string){
    // removes any non alpha-numeric characters except dash and single quotes (apostrophes)
    return string.replace( /[^A-Za-z0-9 '-]/g, '' ) 
  }

    static titleize( string ) {
      let exceptions = [ 'the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from' ]
      let result = [];
      let stringArray = string.split( " " )
      for ( let n = 0; n < stringArray.length; n++ ) {
        if ( n == 0 ) {
          result.push( this.capitalize( stringArray[ n ] ) )
        } else {
          if ( exceptions.includes( stringArray[ n ] ) ) {
            result.push( stringArray[ n ] )
          } else {
            result.push( this.capitalize( stringArray[ n ] ) )
          }
        }
  
      }
      return result.join( " " );
    }
  }
