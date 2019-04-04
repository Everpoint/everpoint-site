import React, { Component } from "react";

import { getRouteById } from "../../../routes";
import { PaddingBlock, Title } from "../styles";
import { HowWeAreWorking } from "../../HowWeAreWorking/HowWeAreWorking";
import { TeamMemberCard } from "../../../components/TeamMemberCard/TeamMemberCard";
import { getVacancyAvatarByType } from "../../TeamMembers/getVacancyAvatarByType";
import styles, {
  TeamSection,
  VacancySection,
  Tab,
  TabItem,
  EmployeesContainer,
  VacanciesContainer,
  Row,
  Employee,
  Padding,
} from "./styles";
import { GoNextLink } from "../../GoNextLink/GoNextLink";

export class Jobs extends Component {
  state = {
    isEmployees: true,
    photoRows: [],
  };

  componentDidMount() {
    this.setRow();
  }

  setRow = () => {
    const { sections } = getRouteById("jobs");
    const { items } = sections.find(section => section.id === "employees");

    const photoRows = [[], []];

    items.forEach((employee, index) =>
      index % 2 === 0 ? photoRows[0].push(employee) : photoRows[1].push(employee),
    );

    this.setState({ photoRows });
  };

  render() {
    const { isEmployees, photoRows } = this.state;
    const { onRef } = this.props;
    const { sections } = getRouteById("jobs");
    const { text, items: vacancies, groupName, id: vacancyId } = sections.find(
      section => section.id === "vacancy",
    );

    return (
      <>
        <TeamSection ref={ref => onRef(ref, "employees")}>
          <Title>{groupName}</Title>
          <Tab>
            <TabItem isActive={isEmployees} onClick={() => this.setState({ isEmployees: true })}>
              Cотрудники
            </TabItem>
            <TabItem isActive={!isEmployees} onClick={() => this.setState({ isEmployees: false })}>
              Рабочий процесс
            </TabItem>
          </Tab>
          {isEmployees ? (
            <EmployeesContainer>
              {photoRows.map((row, index, array) => (
                <Row key={`employees-row-${index}`}>
                  {row.map(({ id, avatar }) => (
                    <Employee key={id} style={{ backgroundImage: `url(${avatar})` }} />
                  ))}
                  {array.length - 1 === index && <Padding as="div" />}
                </Row>
              ))}
            </EmployeesContainer>
          ) : (
            <HowWeAreWorking />
          )}
        </TeamSection>
        <VacancySection ref={ref => onRef(ref, vacancyId)}>
          <Title>{text}</Title>
          <VacanciesContainer>
            {vacancies.map((vacancy, index, array) => (
              <React.Fragment key={vacancy.id}>
                <TeamMemberCard
                  {...vacancy}
                  vacancy
                  className={styles.vacancyBlock}
                  control={<GoNextLink>Описание вакансии</GoNextLink>}
                  avatar={getVacancyAvatarByType(vacancy.type)}
                />
                {array.length - 1 === index && <PaddingBlock />}
              </React.Fragment>
            ))}
          </VacanciesContainer>
        </VacancySection>
      </>
    );
  }
}
