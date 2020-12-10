import React from "react";
import { computed, useSetup } from "reactivue";

export const Test = (() => {
    const {length} = useSetup(() => ({length: computed(() => window["test"].value.length)}))

    return (<React.Fragment>
        <p>This header is in React, listening for <pre>window</pre> object mutations using <pre>@vue/reactivity</pre></p>
        <code style={{fontSize: '2rem'}}>String length is: {length}</code>
    </React.Fragment>)
});
