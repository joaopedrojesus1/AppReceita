import React, { useState } from 'react';
import { View, StyleSheet, StatusBar, ScrollView, Text } from 'react-native';
import AppBar from './AppBar';
import RecipeListPage from './RecipeListPage';
import RecipeDetailPage from './RecipeDetailPage';


const ModalContainer = ({ children }) => {
  return (
    <View style={styles.modalContainer}>
      <View style={styles.modalContent}>{children}</View>
    </View>
  );
};

const App = () => {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const recipes = [
    {
      id: 1,
      title: 'Bolo de Fubá',
      image: 'https://s.cornershopapp.com/product-images/2151417.png?versionId=bRwSf75RWvfgTyUhF9.t0Osyx.m41f17',
      video: 'https://www.youtube.com/watch?v=zsotDeVzJFA',
      preparationTime: '1 hora',
      difficulty: 'Facil',
      ingredients: [
        {
          items: [
            ' 2 xícaras de fubá',
            ' 1 xícara de farinha de trigo',
            ' 2 xícaras de açúcar',
            ' 3 ovos',
            ' 2 xícara de leite',
            ' 1/2 xícara de óleo vegetal',
            ' 1 colher de sopa de fermento em pó',
            ' 1 pitada de sal',
          ],
        },
          {
          
          section: 'Esses são os ingredientes básicos para um bolo de fubá tradicional. No entanto, você também pode adicionar ingredientes extras para dar mais sabor, como:',

          items: [
            'Queijo ralado (cerca de 1/2 xícara) - para um bolo de fubá com queijo',
            'Coco ralado (cerca de 1/2 xícara) - para um bolo de fubá com coco',
            'Erva-doce (cerca de 1 colher de chá) - para um bolo de fubá com   erva-doce',
          ],
          },
      ],
      instructions: [

        {

          items: [

            '1. Pré-aqueça o forno a 180°C e unte uma forma redonda com manteiga ou óleo e polvilhe com fubá ou farinha de trigo.',
            '',
            '2. Em uma tigela grande, misture o fubá, a farinha de trigo, o açúcar e o sal.',
            '',
            '3.Em outra tigela, bata os ovos com um garfo ou batedor manual até ficarem bem misturados. Adicione o leite e o óleo e misture novamente.',
            '',
            '4. Despeje a mistura líquida na tigela dos ingredientes secos e mexa até obter uma massa homogênea',
            '',
            '5. Adicione o fermento em pó e mexa suavemente até que esteja bem incorporado à massa.',
            '',
            '6. Despeje a massa na forma preparada e alise a superfície com uma espátula.',
            '',
            '7. Leve ao forno pré-aquecido e asse por cerca de 35-40 minutos, ou até que um palito inserido no centro do bolo saia limpo.',
            '',
            '8. Retire do forno e deixe o bolo esfriar por alguns minutos na forma. Em seguida, remova-o da forma e deixe esfriar completamente em uma grade.',
            '',
            '9. O bolo de fubá pode ser servido em temperatura ambiente, mas também pode ser delicioso se consumido quente acompanhado de uma xícara de café.',

          ],

        },

      ],

    },

    {
      id: 2,
      title: 'Torta de Limão',
      image: 'https://bocadoforno.com.br/wp-content/uploads/mousse-limao3.png  ',
      preparationTime: '1 hora',
      difficulty: 'Médio',
      ingredients: [
        {
          items: [
            '4 limões (preferencialmente limões grandes)',
            '1 lata de leite condensado (395g)',
            '1 lata de creme de leite (300g)',
            '1/2 xícara de suco de limão fresco (aproximadamente o suco de 2 limões grandes)',
            'Raspas de limão para decorar (opcional)',
          ],
        },
      ],
      instructions: [

        {

          items: [

            '1. Comece espremendo o suco dos limões. Você precisará de aproximadamente 1/2 xícara de suco de limão fresco. Certifique-se de remover as sementes.',
            '',
            '2.  Em uma tigela grande, misture o leite condensado e o suco de limão. Mexa bem até obter uma mistura homogênea.',
            '',
            '3. Em seguida, adicione o creme de leite à mistura e mexa delicadamente até que esteja completamente incorporado',
            '',
            '4. Agora, é hora de preparar as claras em neve. Em uma tigela separada, bata as claras até ficarem firmes e formarem picos suaves. Isso pode ser feito manualmente ou com a ajuda de uma batedeira.',
            '',
            '5. Com cuidado, incorpore as claras em neve à mistura de limão. Faça movimentos suaves e envolventes de baixo para cima para não perder a aeração das claras.',
            '',
            '6. Depois que tudo estiver bem misturado, distribua o mousse em taças individuais ou em um recipiente grande. Cubra com filme plástico e leve à geladeira por pelo menos 2 horas, ou até que esteja firme.',
            '',
            '7. Antes de servir, você pode decorar o mousse de limão com raspas de limão por cima, se desejar. Isso adicionará um toque de frescor e cor.',
            '',
            '8. Sirva gelado e aproveite o delicioso mousse de limão!   Boa Sorte!',

          ],

        },

      ],
    },
    
    {
      id: 3,
      title: 'Pudim',
      image: 'https://images.tcdn.com.br/img/img_prod/727553/curso_festival_de_mini_pudins_data_a_agendar_427_1_e776824e653f8d42284acc0887fddeb9.png ',
      preparationTime: '1 hora',
      difficulty: 'Médio',
      ingredients: [
        {
          items: [
            '1 lata de leite condensado (395g)',
            '2 xícaras de leite',
            '1 colher de chá de essência de baunilha (opcional)',
            '4 ovos',
            '1 xícara de açúcar para caramelizar a forma',
          ],
        },
      ],
      instructions: [

        {

          items: [

            '1. Pré-aqueça o forno a 180°C.',
            '',
            '2.  Comece caramelizando a forma onde o pudim será assado. Em uma panela pequena, derreta o açúcar em fogo baixo até que se torne um caramelo dourado. Tome cuidado para não queimar o açúcar. Assim que o caramelo estiver pronto, despeje-o na forma, espalhando-o uniformemente no fundo e nas laterais.',
            '',
            '3. Em um liquidificador ou em uma tigela grande, misture o leite condensado, o leite, os ovos e a essência de baunilha (se estiver usando). Bata bem até obter uma mistura homogênea e cremosa.',
            '',
            '4. Despeje a mistura do pudim na forma caramelizada.',
            '',
            '5. Cubra a forma com papel-alumínio, vedando bem, para evitar a entrada de vapor durante o cozimento.',
            '',
            '6. Coloque a forma do pudim em uma assadeira maior e adicione água quente na assadeira até que alcance cerca de metade da altura da forma do pudim. Isso criará um banho-maria.',
            '',
            '7. Leve ao forno pré-aquecido e asse por aproximadamente 1 hora, ou até que o pudim esteja firme nas bordas, mas ainda levemente tremido no centro.',
            '',
            '8. Retire a forma do pudim do banho-maria e deixe esfriar completamente em temperatura ambiente.',
            '9. Depois que esfriar, leve o pudim à geladeira e deixe refrigerar por pelo menos 4 horas, ou idealmente durante a noite, para firmar bem.',
            '10. Quando estiver pronto para servir, passe uma faca ao redor das bordas do pudim para soltá-lo da forma. Coloque um prato de servir sobre a forma e vire de cabeça para baixo, fazendo com que o pudim deslize para o prato.',
            '11. Retire a forma com cuidado, permitindo que o caramelo escorra sobre o pudim.',

          ],

        },

      ],
    },
    {
      id: 4,
      title: 'Brigadeiro',
      image: 'https://www.gebon.com.br/image/media/_00300/339/picole-classico-brigadeiro.png ',
      preparationTime: '50 min',
      difficulty: 'Facil',
      ingredients: [
        {
          items: [
            '1 lata (ou caixa) de leite condensado',
            '2 colheres de sopa de cacau em pó (ou chocolate em pó)',
            '1 colher de sopa de manteiga (sem sal)',
            'Granulado de chocolate (opcional, para decorar)',
            '1 xícara de açúcar para caramelizar a forma',
          ],
        },
      ],
      instructions: [

        {

          items: [

            '1. Em uma panela, coloque o leite condensado, o cacau em pó e a manteiga.',
            '',
            '2.  Leve ao fogo baixo e mexa constantemente com uma colher de pau ou espátula.',
            '',
            '3. Continue mexendo até que a mistura comece a desgrudar do fundo da panela, formando uma massa consistente. Isso pode levar de 10 a 15 minutos.',
            '',
            '4. Retire a panela do fogo e deixe a massa esfriar por alguns minutos.',
            '',
            '5. Com as mãos untadas com manteiga ou óleo, faça bolinhas com a massa e passe no granulado de chocolate para decorar.',
            '',
            '6. Coloque os brigadeiros em forminhas de papel e sirva.',
            '',

          ],

        },

      ],
    },
    
    
   
  ];

  const handlePressRecipe = (recipe) => {
    setSelectedRecipe(recipe);
  };

  const handleCloseModal = () => {
    setSelectedRecipe(null);
  };

  return (
    <View style={styles.principalcontainer}>
      <StatusBar style="auto" />

      <AppBar />
      <ScrollView contentContainerStyle={styles.contentContainer}>
        {selectedRecipe ? (
          <ModalContainer>
            <RecipeDetailPage recipe={selectedRecipe} onClose={handleCloseModal} />
          </ModalContainer>
        ) : (
          <RecipeListPage recipes={recipes} onPressRecipe={handlePressRecipe} />
        )}
      </ScrollView>
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#ffffff',
    width: '80%',
    padding: 20,
    borderRadius: 8,
  },
  principalcontainer: {
    flex: 1, 
  },
  contentContainer: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  footer: {
    backgroundColor: '#F7EADD',
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 15,

    marginBottom: -20,
    
  },
  footerText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default App;
