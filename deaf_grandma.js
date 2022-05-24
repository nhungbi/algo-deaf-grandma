function deafGrandma() {
    let count_bye = 0;
    console.log('HEY, KID!')

    while (count_bye < 2) {

        let kid_rep = window.prompt('Input a reply to grandma.')
        if (kid_rep == "") {
            console.log('WHAT?!')
        } else if (kid_rep == 'GOODBYE!') {
            count_bye += 1
            if (count_bye === 2) {
                console.log('LATER, SKATER!')
            } else {
                console.log('LEAVING SO SOON?')
            }
        } else if (Character.isUpperCase(kid_rep)) {
            consolve.log('NO, NOT SINCE 1946!')
        } else if (Character.isLpperCase(kid_rep)) {
            consolve.log('SPEAK UP KID!')
        }
    }

}


deafGrandma();