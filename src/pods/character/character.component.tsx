import React from 'react';
import { Formik, Form } from 'formik';
import { Character } from './character.vm';
import * as classes from './character.styles';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { TextFieldComponent } from 'common/components';
import { Button } from '@material-ui/core';
import { formValidation } from './character.validations';

interface Props {
  character: Character;
  onSave: (character: Character) => void;

}

export const CharacterComponent: React.FunctionComponent<Props> = (props) => {
  const { character, onSave } = props;

  return (
    <Formik
      onSubmit={onSave}
      initialValues={character}
      enableReinitialize={true}
    >
      {() => (
        <div className={classes.root}>
          <Avatar alt={character.name} src={character.image} />
          <Form >
            <Typography variant="subtitle1" gutterBottom>
              Name: {character.name}
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Status: {character.status}
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Species: {character.species}
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Origin: {character.origin}
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Location: {character.location}
            </Typography>
            <TextFieldComponent
              name="bestSentence"
              label="bestSentence"
              multiline={true}
              maxRows={15}

            />
             <Button type="submit" variant="contained" color="primary" onClick={()=>onSave(character)}>
              Save
            </Button>
          </Form>
        </div>
      )}
    </Formik>
  );
};
