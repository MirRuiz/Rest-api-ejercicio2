import * as React from 'react';
import { CharacterEntityVm } from './character-collection.vm';
import { CharacterCard } from './components/character-card.component';
import * as classes from './character-collection.styles';
import { Button } from '@material-ui/core';

interface Props {
  characterCollection: CharacterEntityVm[];
  onCreateCharacter: () => void;
  onEdit: (id: number) => void;
}

export const CharacterCollectionComponent: React.FunctionComponent<Props> = (
  props
) => {
  const { characterCollection, onEdit, onCreateCharacter } = props;////////////////////////////////

  return (
    <div className={classes.root}>
       <Button variant="contained" color="primary" onClick={onCreateCharacter}>
        Add character
      </Button>
      <ul className={classes.list}>
        {characterCollection.map((character) => (
          <li key={character.id}>
            <CharacterCard character={character} onEdit={onEdit}  />
          </li>
        ))}
      </ul>
    </div>
  );
};
