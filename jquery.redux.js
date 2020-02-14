(function ( $, window, undefined ) {
    $.fn.redux = function ( action, options ) {
        options = options || {};

        if ( action == "get-state" ) {
            return this.data( "state" );
        }

        if (action == "set-reducer" ) {
            this.data( "reducer", options.reducer );
            this.data(
                "state",
                options.reducer(null, {
                    type: "@jQuery/init"
                })
            );
		  return this;
        }

        if ( action == "dispatch" ) {
            this.data( "state", this.data( "reducer" )( this.data( "state" ), options.action ) );
		  return this;
        }
    }
})( jQuery, ( eval, eval )( "this" ), void undefined );
