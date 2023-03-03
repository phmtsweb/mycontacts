/* eslint-disable no-nested-ternary */
import { ArrowDown, ArrowUp } from 'phosphor-react';
import {
  useEffect, useMemo, useState, useCallback,
} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useTheme } from 'styled-components';
import { Modal } from '../../components/Modal';
import { Button } from '../../components/Button';
import { ContactItem } from './components/ContactItem';
import { Loader } from '../../components/Loader';
import {
  Container, Header, ListContainer, InputSearchContainer,
} from './styles';
import { contactsService } from '../../services/ContactsService';
import { Fail } from '../../components/Fail';
import { EmptyList } from './components/EmptyList';
import { EmptySearch } from './components/EmptySearch';

export function Home() {
  const [contacts, setContacts] = useState([]);
  const [orderBy, setOrderBy] = useState('asc');
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const [isModalOpen, setModalOpen] = useState(false);

  const navigate = useHistory();

  const filteredContacts = useMemo(() => contacts.filter((contact) => (
    contact.name.toLowerCase().includes(searchTerm.toLowerCase()))), [contacts, searchTerm]);

  function handleToggleOrderBy() {
    setOrderBy((prevOrderBy) => (prevOrderBy === 'asc' ? 'desc' : 'asc'));
  }

  const handleEditContact = (id) => {
    navigate.push(`/contactdetails/${id}`);
  };

  const handleDeleteContact = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const theme = useTheme();

  const loadContacts = useCallback(async () => {
    try {
      setIsLoading(true);
      const contactsList = await contactsService.listContacts(orderBy);
      setHasError(false);
      setContacts(contactsList);
    } catch (error) {
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  }, [orderBy]);

  const handleTryAgain = () => {
    loadContacts();
  };

  useEffect(() => {
    loadContacts();
  }, [loadContacts]);

  return (
    <>
      <Loader isShow={isLoading} />
      <Modal
        title="Deseja excluir o contato Pedro Mascarenhas?"
        description="Esta ação não poderá ser desfeita."
        isOpen={isModalOpen}
        closeModal={handleCloseModal}
        modalColor={theme.colors.danger.main}
      >
        <Button
          type="button"
          bgColor="transparent"
          textColor={theme.colors.gray['200']}
          onClick={() => setModalOpen(false)}
        >
          Cancelar
        </Button>
        <Button
          type="button"
          bgColor={theme.colors.danger.main}
          textColor={theme.colors.white}
        >
          Deletar

        </Button>
      </Modal>
      {contacts.length > 0 && (
        <InputSearchContainer>
          <input
            type="text"
            placeholder="Pesquisar contato"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />
        </InputSearchContainer>
      )}
      <Container>
        <Header hasError={hasError} isCentered={contacts.length === 0}>
          {(!hasError && contacts.length > 0)
            && <strong>{ filteredContacts.length !== 1 ? `${filteredContacts.length} contatos` : `${filteredContacts.length} contato`}</strong>}
          <Link to="/contactdetails">Novo contato</Link>
        </Header>
        {hasError
          ? (
            <Fail
              title="Houve um erro ao tentar buscar os seus contatos"
              buttonLabel="Tentar novamente"
              buttonAction={handleTryAgain}
            />
          ) : (
            (contacts.length === 0 && !isLoading)
              ? <EmptyList />
              : (
                filteredContacts.length === 0 && !isLoading
                  ? <EmptySearch searchTerm={searchTerm} />
                  : (
                    <ListContainer>
                      {filteredContacts.length > 0 && (
                      <header>
                        <button type="button" onClick={handleToggleOrderBy}>
                          Nome
                          {orderBy === 'asc' ? <ArrowDown /> : <ArrowUp />}
                        </button>
                      </header>
                      )}
                      <div>
                        {filteredContacts.map((contact) => (
                          <ContactItem
                            key={contact.id}
                            name={contact.name}
                            email={contact.email}
                            phone={contact.phone}
                            category={contact.category_name}
                            handleEditContact={() => handleEditContact(contact.id)}
                            handleDeleteContact={handleDeleteContact}
                          />
                        ))}

                      </div>

                    </ListContainer>
                  )
              )
          )}

      </Container>
    </>
  );
}
