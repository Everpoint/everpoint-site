import React, { Component } from "react";

import { getRouteById } from "../../../routes/utils";
import { PaddingBlock, Title } from "../styles";
import { TeamMemberCard } from "../../../components/TeamMemberCard/TeamMemberCard";
import { NoVacancyCard } from "../../../components/TeamMembers/NoVacancyCard";
import styles, {
  TeamSection,
  VacancySection,
  Tab,
  TabItem,
  PhotoContainer,
  VacanciesContainer,
  Row,
  Photo,
  Padding,
} from "./styles";
import { GoNextLink } from "../../GoNextLink/GoNextLink";

export class Jobs extends Component {
  state = {
    photoId: "employees",
    photoRows: [],
  };

  componentDidMount() {
    const { photoId } = this.state;
    this.setRow(photoId);
  }

  setRow = id => {
    const { routes } = this.props;
    const { sections } = getRouteById("jobs", routes);
    const { items } = sections.find(section => section.id === id);

    const photoRows = [[], []];

    items.forEach((employee, index) =>
      index % 2 === 0 ? photoRows[0].push(employee) : photoRows[1].push(employee),
    );

    this.setState({ photoRows });
  };

  componentDidUpdate(prevProps, { photoId: prevPhotoId }) {
    const { photoId } = this.state;

    if (prevPhotoId !== photoId) {
      this.setRow(photoId);
      if (this.container) {
        this.container.scrollLeft = 0;
      }
    }
  }

  onScrollContainerRef = ref => {
    if (ref) {
      this.container = ref;
    }
  };

  render() {
    const { photoId, photoRows } = this.state;
    const { onRef, routes } = this.props;
    const { sections } = getRouteById("jobs", routes);

    const { text, groupName, items: vacancies, id: vacancyId } = sections.find(
      section => section.id === "vacancy",
    );
    const { mobileText: employeesMobileText } = sections.find(
      section => section.id === "employees",
    );
    const { text: processText } = sections.find(section => section.id === "process");

    return (
      <>
        <TeamSection ref={ref => onRef(ref, "employees")}>
          <Title>{groupName}</Title>
          <Tab>
            <TabItem
              isActive={photoId === "employees"}
              onClick={() => this.setState({ photoId: "employees" })}
            >
              {employeesMobileText}
            </TabItem>
            <TabItem
              isActive={photoId === "photo"}
              onClick={() => this.setState({ photoId: "photo" })}
            >
              {processText}
            </TabItem>
          </Tab>
          <PhotoContainer ref={this.onScrollContainerRef}>
            {photoRows.map((row, index) => (
              <Row key={`employees-row-${index}`}>
                {row.map((item, index, array) => (
                  <React.Fragment key={`${item.id || index}-employees`}>
                    <Photo
                      style={{
                        backgroundImage: `url(${photoId === "employees" ? item.avatar : item})`,
                      }}
                    />
                    {array.length - 1 === index && <Padding as="span" />}
                  </React.Fragment>
                ))}
              </Row>
            ))}
          </PhotoContainer>
        </TeamSection>
        <VacancySection ref={ref => onRef(ref, vacancyId)}>
          <Title>{text}</Title>
          <VacanciesContainer
            noVacancy={vacancies.length === 0}
            oneVacancy={vacancies.length === 1}
          >
            {vacancies.length > 0 ? (
              vacancies.map((vacancy, index, array) => (
                <React.Fragment key={vacancy.id}>
                  <TeamMemberCard
                    {...vacancy}
                    vacancy
                    className={styles.vacancyBlock}
                    control={
                      <GoNextLink gatsby to={vacancy.longreadLink}>
                        Описание вакансии
                      </GoNextLink>
                    }
                    avatar={vacancy.avatar}
                  />
                  {array.length - 1 === index && array.length > 1 && <PaddingBlock />}
                </React.Fragment>
              ))
            ) : (
              <NoVacancyCard />
            )}
          </VacanciesContainer>
        </VacancySection>
      </>
    );
  }
}
