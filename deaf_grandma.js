function deafGrandma() {
    let count_bye = 0;
    alert('HEY, KID!')

    while (count_bye < 2) {
        let kid_rep = window.prompt('Input a reply to grandma.')
        if (kid_rep == "") {
            alert('WHAT?!')
        } else if (kid_rep == 'GOODBYE!') {
            count_bye += 1
            if (count_bye === 2) {
                alert('LATER, SKATER!')
                return
            } else {
                alert('LEAVING SO SOON?')
            }
        } else if (kid_rep === kid_rep.toUpperCase()) {
            alert('NO, NOT SINCE 1946!')
        } else if (kid_rep === kid_rep.toLowerCase()) {
            alert('SPEAK UP KID!')
        }
    }

}


deafGrandma();