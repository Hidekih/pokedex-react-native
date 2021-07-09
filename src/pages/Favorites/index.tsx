import React, { useState } from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import Themes from '../../styles/colors';
import { PokemonData } from '../../utils/types';

import { 
  Container, 
  Header, 
  HeaderTitle, 
  Content,
  PokeList,
  
  PokeInfoContainer,
  PokeImage,
  PokeData,
  PokeBasicsContainer,
  PokeName,
  PokeNumber,
  BoldText,
  PokeTypesContainer,
  TypeBadge,
  BadgeTitle
} from './styles';

export function Favorites() {
  const [ pokemons, setPokemons ] = useState<PokemonData[]>([])
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Container>
        <Header>
          <HeaderTitle>Favorites</HeaderTitle>
        </Header>
        
        <Content>
          
            <PokeList
              showsVerticalScrollIndicator={false}
            >
              {/* <PokeInfoContainer>
                <PokeImage 
                  height={100} 
                  width={100} 
                  source={{ uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon}.png` }}
                />
                <PokeData>
                  <PokeBasicsContainer>    
                    <PokeName>
                      {pokemon === 251 ? 'Celebi' : 'Flygon' }
                    </PokeName>
                    <PokeNumber>
                      {'#'}
                      <BoldText>{pokemon}</BoldText>
                    </PokeNumber>
                  </PokeBasicsContainer>
                  <PokeTypesContainer>
                    { true && ['grass','poison'].map(type => (
                      <TypeBadge key={type} typeColor={'grass'}>
                        <BadgeTitle>
                          {'Sla'}
                        </BadgeTitle>
                      </TypeBadge>
                    )) }
                  </PokeTypesContainer>
                </PokeData>                
              </PokeInfoContainer> */}

                <PokeInfoContainer>
                  <PokeImage 
                    height={100} 
                    width={100} 
                    source={{ uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/251.png` }}
                  />
                  <PokeData>
                    <PokeBasicsContainer>    
                      <PokeName>
                        {'Celebi' }
                      </PokeName>
                      <PokeNumber>
                        {'#'}
                        <BoldText>{'251'}</BoldText>
                      </PokeNumber>
                    </PokeBasicsContainer>
                    <PokeTypesContainer>
                      
                        <TypeBadge typeColor={'psychc'}>
                          <BadgeTitle>
                            {'Psychc'}
                          </BadgeTitle>
                        </TypeBadge>
                        <TypeBadge typeColor={'grass'}>
                          <BadgeTitle>
                            {'Grass'}
                          </BadgeTitle>
                        </TypeBadge>
                      
                    </PokeTypesContainer>
                  </PokeData>                
                </PokeInfoContainer>
                
              </PokeList>
          
        </Content>
      </Container>
    </SafeAreaView>
  )
}