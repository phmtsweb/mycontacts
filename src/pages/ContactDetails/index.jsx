import { useParams } from 'react-router-dom';
import { useTheme } from 'styled-components';
import { useEffect, useState } from 'react';
import { Input } from './components/Input';
import { Select } from './components/Select';
import { PageHeader } from './components/PageHeader';
import { Button } from '../../components/Button';
import { ButtonContainer, Container } from './styles';
import { FormGroup } from './components/FormGroup';
import { validateEmail } from '../../utils/validateEmail';
import { formatPhone } from '../../utils/formatPhone';
import { useErrors } from '../../hooks/useErrors';
import { Loader } from '../../components/Loader';

export function ContactDetails() {
  const { id } = useParams();

  const [contact, setContact] = useState({});
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const theme = useTheme();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [category, setCategory] = useState('');

  const {
    errors, setError, clearError, errorExists, checkErrors,
  } = useErrors();
  const [formIsValid, setIsFormValid] = useState(false);

  useEffect(() => {
    if (id) {
      setIsLoading(true);
      fetch(`http://localhost:3333/contacts/${id}`)
        .then(async (response) => {
          const contactResponse = await response.json();
          const currentContact = {
            id: contactResponse.id,
            name: contactResponse.name,
            email: contactResponse.email,
            phone: contactResponse.phone,
            categoryId: contactResponse.category_id,
          };
          setName(currentContact.name);
          setEmail(currentContact.email);
          setPhone(currentContact.phone);
          setCategory(currentContact.categoryId);
          setContact(contactResponse);
        })
        .catch((error) => error)
        .finally(() => setIsLoading(false));
    }
  }, [id]);

  useEffect(() => {
    setIsLoading(true);
    fetch('http://localhost:3333/categories')
      .then(async (response) => {
        const categoriesResponse = await response.json();
        setCategories(categoriesResponse);
      })
      .catch((error) => error)
      .finally(() => setIsLoading(false));
  }, []);

  const title = id ? `Editar ${contact.name}` : 'Novo contato';

  const handleSubmit = (event) => {
    event.preventDefault();

    // console.log({
    //   name,
    //   email,
    //   phone,
    //   category,
    // });
  };

  useEffect(() => {
    setIsFormValid(checkErrors() && name.trim() !== '' && category.trim() !== '');
  }, [errors, name, category, checkErrors]);

  const handleChangeName = (event) => {
    setName(event.target.value);

    if (!event.target.value) {
      setError({ field: 'name', errorMessage: 'O nome é obrigatório' });
    } else {
      clearError('name');
    }
  };

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);

    if (event.target.value && !validateEmail(email)) {
      if (errorExists('email')) {
        return;
      }
      setError(
        { field: 'email', errorMessage: 'Digite um e-mail válido!' },
      );
    } else {
      clearError('email');
    }
  };

  const handleChangePhone = (event) => {
    setPhone(formatPhone(event.target.value));

    if (event.target.value && event.target.value.length !== 15) {
      if (errorExists('phone')) return;
      setError({ field: 'phone', errorMessage: 'Digite um telefone válido!' });
    } else {
      clearError('phone');
    }
  };

  return (
    <>
      <Loader isShow={isLoading} />
      <PageHeader title={title} />
      <Container onSubmit={handleSubmit} noValidate>
        <FormGroup errorMessage={errors.name}>
          <Input
            type="text"
            placeholder="Nome *"
            value={name}
            onChange={handleChangeName}
          />
        </FormGroup>
        <FormGroup errorMessage={errors.email}>
          <Input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={handleChangeEmail}
          />
        </FormGroup>
        <FormGroup errorMessage={errors.phone}>
          <Input
            type="text"
            placeholder="Telefone"
            value={phone}
            onChange={handleChangePhone}
            inputMode="numeric"
            maxLength="15"
          />
        </FormGroup>
        <FormGroup>
          <Select value={category} onChange={(event) => setCategory(event.target.value)}>
            <option value="" disabled hidden>Categoria</option>
            {categories.map((current) => (
              <option key={current.id} value={current.id}>{current.name}</option>
            ))}

          </Select>
        </FormGroup>
        <ButtonContainer>
          <Button
            type="submit"
            bgColor={theme.colors.primary.main}
            textColor={theme.colors.white}
            disabled={!formIsValid}
          >
            {id ? 'Salvar alterações' : 'Salvar contato'}
          </Button>
        </ButtonContainer>
      </Container>
    </>

  );
}
