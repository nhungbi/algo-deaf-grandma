def deaf_grandma():
    count_bye = 0
    print('HEY KID!')
    while count_bye < 2:

        kid_rep = input('Input a reply to grandma.')
        if kid_rep == "":
            print ('WHAT?!')
            
        elif kid_rep == 'GOODBYE!':
            count_bye +=1
            if count_bye == 2:
                print('LATER, SKATER!')
            else:
                print ('LEAVING SO SOON?')

        elif kid_rep.isupper():
            print('NO, NOT SINCE 1946!')
        elif kid_rep.islower():
            print ("SPEAK UP, KID!")
        





deaf_grandma()
