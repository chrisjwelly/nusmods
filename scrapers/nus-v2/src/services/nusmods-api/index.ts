/**
 * NUSMods GraphQL API client generated by GraphQL Code Generator.
 * DO NOT EDIT.
 *
 * To regenerate this file, run:
 * yarn generate-graphql
 */

import type { Headers } from 'graphql-request/dist/types.dom';

import { GraphQLClient } from 'graphql-request';
import { print } from 'graphql';
import gql from 'graphql-tag';

export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * The `Time` scalar type represents a time. The Time appears in a JSON
   * response as an ISO8601 formatted string.
   */
  Time: string;
  Cursor: string;
};

export type AcadYear = Node & {
  __typename?: 'AcadYear';
  /** The ID of an object */
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  createTime?: Maybe<Scalars['Time']>;
  updateTime?: Maybe<Scalars['Time']>;
  school?: Maybe<School>;
  semesters?: Maybe<Array<Maybe<Semester>>>;
  courses?: Maybe<Array<Maybe<Course>>>;
  courseConnection: CourseConnection;
};

export type AcadYearCourseConnectionArgs = {
  after?: Maybe<Scalars['Cursor']>;
  first?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  last?: Maybe<Scalars['Int']>;
};

export type AcadYearConnection = {
  __typename?: 'AcadYearConnection';
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int'];
  /**
   * Information to aid in pagination.
   * https://relay.dev/graphql/connections.htm#sec-undefined.PageInfo
   */
  pageInfo: PageInfo;
  /**
   * A list of edges.
   * https://relay.dev/graphql/connections.htm#sec-Edge-Types
   */
  edges?: Maybe<Array<Maybe<AcadYearEdge>>>;
};

export type AcadYearEdge = {
  __typename?: 'AcadYearEdge';
  /**
   * The item at the end of the edge.
   * https://relay.dev/graphql/connections.htm#sec-Node
   */
  node?: Maybe<AcadYear>;
  /**
   * A cursor for use in pagination.
   * https://relay.dev/graphql/connections.htm#sec-Cursor
   */
  cursor: Scalars['Cursor'];
};

export type CreateAcadYearInput = {
  schoolId: Scalars['ID'];
  name: Scalars['String'];
};

export type CreateAcadYearPayload = {
  __typename?: 'CreateAcadYearPayload';
  acadYear?: Maybe<AcadYear>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Adds a course offering to a timetable. */
  addCourseOfferingToTimetable: AddCourseOfferingToTimetablePayload;
  createAcadYear: CreateAcadYearPayload;
  createSchool: CreateSchoolPayload;
  createSemester: CreateSemesterPayload;
  createTimetable: CreateTimetablePayload;
  deleteCourse: DeleteCoursePayload;
  /** Deletes a timetable. */
  deleteTimetable: DeleteTimetablePayload;
  /** Removes a course offering from its parent timetable. */
  removeCourseOfferingFromTimetable: RemoveCourseOfferingFromTimetablePayload;
  /** Change the lesson group selection. */
  replaceLessonGroupInTimetable: ReplaceLessonGroupInTimetablePayload;
  updateSettings: UpdateSettingsPayload;
  updateTimetable: UpdateTimetablePayload;
  upsertCourse: UpsertCoursePayload;
};

export type MutationAddCourseOfferingToTimetableArgs = {
  input: AddCourseOfferingToTimetableInput;
};

export type MutationCreateAcadYearArgs = {
  input: CreateAcadYearInput;
};

export type MutationCreateSchoolArgs = {
  input: CreateSchoolInput;
};

export type MutationCreateSemesterArgs = {
  input: CreateSemesterInput;
};

export type MutationCreateTimetableArgs = {
  input: CreateTimetableInput;
};

export type MutationDeleteCourseArgs = {
  input: DeleteCourseInput;
};

export type MutationDeleteTimetableArgs = {
  input: DeleteTimetableInput;
};

export type MutationRemoveCourseOfferingFromTimetableArgs = {
  input: RemoveCourseOfferingFromTimetableInput;
};

export type MutationReplaceLessonGroupInTimetableArgs = {
  input: ReplaceLessonGroupInTimetableInput;
};

export type MutationUpdateSettingsArgs = {
  input: UpdateSettingsInput;
};

export type MutationUpdateTimetableArgs = {
  input: UpdateTimetableInput;
};

export type MutationUpsertCourseArgs = {
  input: UpsertCourseInput;
};

export type Course = Node & {
  __typename?: 'Course';
  /** The ID of an object */
  id: Scalars['ID'];
  code?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  credit?: Maybe<Scalars['String']>;
  preclusionString?: Maybe<Scalars['String']>;
  prerequisiteString?: Maybe<Scalars['String']>;
  corequisiteString?: Maybe<Scalars['String']>;
  acadYear?: Maybe<AcadYear>;
  courseOfferings?: Maybe<Array<Maybe<CourseOffering>>>;
};

export type CourseConnection = {
  __typename?: 'CourseConnection';
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int'];
  /**
   * Information to aid in pagination.
   * https://relay.dev/graphql/connections.htm#sec-undefined.PageInfo
   */
  pageInfo: PageInfo;
  /**
   * A list of edges.
   * https://relay.dev/graphql/connections.htm#sec-Edge-Types
   */
  edges?: Maybe<Array<Maybe<CourseEdge>>>;
};

export type CourseEdge = {
  __typename?: 'CourseEdge';
  /**
   * The item at the end of the edge.
   * https://relay.dev/graphql/connections.htm#sec-Node
   */
  node?: Maybe<Course>;
  /**
   * A cursor for use in pagination.
   * https://relay.dev/graphql/connections.htm#sec-Cursor
   */
  cursor: Scalars['Cursor'];
};

export type UpsertCourseInput = {
  acadYearId: Scalars['ID'];
  code: Scalars['String'];
  title: Scalars['String'];
  description: Scalars['String'];
  credit: Scalars['String'];
  prerequisiteString?: Maybe<Scalars['String']>;
  corequisiteString?: Maybe<Scalars['String']>;
  preclusionString?: Maybe<Scalars['String']>;
};

export type UpsertCoursePayload = {
  __typename?: 'UpsertCoursePayload';
  course?: Maybe<Course>;
};

export type DeleteCourseInput = {
  acadYearId: Scalars['ID'];
  code: Scalars['String'];
};

export type DeleteCoursePayload = {
  __typename?: 'DeleteCoursePayload';
  deletedCourseCode?: Maybe<Scalars['String']>;
};

export type CourseOffering = Node & {
  __typename?: 'CourseOffering';
  /** The ID of an object */
  id: Scalars['ID'];
  department?: Maybe<Scalars['String']>;
  workloadString?: Maybe<Scalars['String']>;
  semester?: Maybe<Semester>;
  course?: Maybe<Course>;
  exam?: Maybe<Exam>;
  lessonGroups?: Maybe<Array<Maybe<LessonGroup>>>;
};

export type CourseOfferingSelection = Node & {
  __typename?: 'CourseOfferingSelection';
  id: Scalars['ID'];
  isHidden?: Maybe<Scalars['Boolean']>;
  timetable?: Maybe<Timetable>;
  courseOffering?: Maybe<CourseOffering>;
  lessonGroupSelections?: Maybe<Array<Maybe<LessonGroupSelection>>>;
};

export type AddCourseOfferingToTimetableInput = {
  /** The ID of the timetable the course offering should be added to. */
  timetableId: Scalars['ID'];
  /** The ID of the course offering to be selected. */
  courseOfferingId: Scalars['ID'];
};

export type AddCourseOfferingToTimetablePayload = {
  __typename?: 'AddCourseOfferingToTimetablePayload';
  courseOfferingSelection?: Maybe<CourseOfferingSelection>;
};

export type RemoveCourseOfferingFromTimetableInput = {
  /** The ID of the course offering selection to remove. */
  courseOfferingSelectionId: Scalars['ID'];
};

export type RemoveCourseOfferingFromTimetablePayload = {
  __typename?: 'RemoveCourseOfferingFromTimetablePayload';
  /** The ID of the removed course offering selection. */
  removedCourseOfferingSelectionId?: Maybe<Scalars['ID']>;
};

export type Exam = Node & {
  __typename?: 'Exam';
  /** The ID of an object */
  id: Scalars['ID'];
  courseOffering?: Maybe<CourseOffering>;
  timeslot?: Maybe<ExamTimeslot>;
};

export type ExamTimeslot = Node & {
  __typename?: 'ExamTimeslot';
  /** The ID of an object */
  id: Scalars['ID'];
  date?: Maybe<Scalars['Time']>;
  duration?: Maybe<Scalars['Int']>;
  exams?: Maybe<Array<Maybe<Exam>>>;
};

export enum Day {
  Monday = 'MONDAY',
  Tuesday = 'TUESDAY',
  Wednesday = 'WEDNESDAY',
  Thursday = 'THURSDAY',
  Friday = 'FRIDAY',
  Saturday = 'SATURDAY',
  Sunday = 'SUNDAY',
}

export type Lesson = Node & {
  __typename?: 'Lesson';
  /** The ID of an object */
  id: Scalars['ID'];
  day?: Maybe<Day>;
  startTime?: Maybe<Scalars['Time']>;
  endTime?: Maybe<Scalars['Time']>;
  weekString?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Int']>;
  group?: Maybe<LessonGroup>;
};

export type LessonGroup = Node & {
  __typename?: 'LessonGroup';
  /** The ID of an object */
  id: Scalars['ID'];
  /** Lesson number */
  number?: Maybe<Scalars['String']>;
  /** Lesson type, e.g. lecture, tutorial, etc. */
  type?: Maybe<Scalars['String']>;
  courseOffering?: Maybe<CourseOffering>;
  lessons?: Maybe<Array<Maybe<Lesson>>>;
};

export type LessonGroupSelection = Node & {
  __typename?: 'LessonGroupSelection';
  id: Scalars['ID'];
  courseOfferingSelection?: Maybe<CourseOfferingSelection>;
  lessonGroup?: Maybe<LessonGroup>;
};

export type ReplaceLessonGroupInTimetableInput = {
  /** The ID of the lesson group selection to be retargeted. */
  lessonGroupSelectionId: Scalars['ID'];
  /** The ID of the lesson group to be selected instead. */
  replacementLessonGroupId: Scalars['ID'];
};

export type ReplaceLessonGroupInTimetablePayload = {
  __typename?: 'ReplaceLessonGroupInTimetablePayload';
  /** The modified lesson group selection. */
  lessonGroupSelection?: Maybe<LessonGroupSelection>;
};

/**
 * An object with an ID to support global identification.
 * See: https://graphql.org/learn/global-object-identification/#node-interface
 */
export type Node = {
  /** Globally unique identifier. */
  id: Scalars['ID'];
};

export type Query = {
  __typename?: 'Query';
  me?: Maybe<User>;
  /** Returns a specific node by ID. */
  node?: Maybe<Node>;
  /** Returns the list of nodes with the given IDs. */
  nodes: Array<Maybe<Node>>;
  schoolConnection: SchoolConnection;
  /** Get a single school by its (case-sensitive) short name. */
  schoolWithShortName?: Maybe<School>;
  /** Get all schools */
  schools?: Maybe<Array<Maybe<School>>>;
  settings?: Maybe<UserSettings>;
  timetableConnection: TimetableConnection;
};

export type QueryNodeArgs = {
  id: Scalars['ID'];
};

export type QueryNodesArgs = {
  ids: Array<Scalars['ID']>;
};

export type QuerySchoolConnectionArgs = {
  after?: Maybe<Scalars['Cursor']>;
  first?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  last?: Maybe<Scalars['Int']>;
};

export type QuerySchoolWithShortNameArgs = {
  shortName?: Maybe<Scalars['String']>;
};

export type QueryTimetableConnectionArgs = {
  after?: Maybe<Scalars['Cursor']>;
  first?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  last?: Maybe<Scalars['Int']>;
};

export type School = Node & {
  __typename?: 'School';
  /** The ID of an object */
  id: Scalars['ID'];
  longName?: Maybe<Scalars['String']>;
  shortName?: Maybe<Scalars['String']>;
  createTime?: Maybe<Scalars['Time']>;
  updateTime?: Maybe<Scalars['Time']>;
  acadYears?: Maybe<Array<Maybe<AcadYear>>>;
  acadYearConnection: AcadYearConnection;
  acadYearWithName?: Maybe<AcadYear>;
};

export type SchoolAcadYearConnectionArgs = {
  after?: Maybe<Scalars['Cursor']>;
  first?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  last?: Maybe<Scalars['Int']>;
};

export type SchoolAcadYearWithNameArgs = {
  name: Scalars['String'];
};

export type SchoolConnection = {
  __typename?: 'SchoolConnection';
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int'];
  /**
   * Information to aid in pagination.
   * https://relay.dev/graphql/connections.htm#sec-undefined.PageInfo
   */
  pageInfo: PageInfo;
  /**
   * A list of edges.
   * https://relay.dev/graphql/connections.htm#sec-Edge-Types
   */
  edges?: Maybe<Array<Maybe<SchoolEdge>>>;
};

export type SchoolEdge = {
  __typename?: 'SchoolEdge';
  /**
   * The item at the end of the edge.
   * https://relay.dev/graphql/connections.htm#sec-Node
   */
  node?: Maybe<School>;
  /**
   * A cursor for use in pagination.
   * https://relay.dev/graphql/connections.htm#sec-Cursor
   */
  cursor: Scalars['Cursor'];
};

export type CreateSchoolInput = {
  longName: Scalars['String'];
  shortName: Scalars['String'];
};

export type CreateSchoolPayload = {
  __typename?: 'CreateSchoolPayload';
  school?: Maybe<School>;
};

export type Semester = Node & {
  __typename?: 'Semester';
  /** The ID of an object */
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  acadYear?: Maybe<AcadYear>;
  courseOfferings?: Maybe<Array<Maybe<CourseOffering>>>;
};

export type SemesterConnection = {
  __typename?: 'SemesterConnection';
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int'];
  /**
   * Information to aid in pagination.
   * https://relay.dev/graphql/connections.htm#sec-undefined.PageInfo
   */
  pageInfo: PageInfo;
  /**
   * A list of edges.
   * https://relay.dev/graphql/connections.htm#sec-Edge-Types
   */
  edges?: Maybe<Array<Maybe<SemesterEdge>>>;
};

export type SemesterEdge = {
  __typename?: 'SemesterEdge';
  /**
   * The item at the end of the edge.
   * https://relay.dev/graphql/connections.htm#sec-Node
   */
  node?: Maybe<Semester>;
  /**
   * A cursor for use in pagination.
   * https://relay.dev/graphql/connections.htm#sec-Cursor
   */
  cursor: Scalars['Cursor'];
};

export type CreateSemesterInput = {
  acadYearId: Scalars['ID'];
  name: Scalars['String'];
};

export type CreateSemesterPayload = {
  __typename?: 'CreateSemesterPayload';
  semester?: Maybe<Semester>;
};

export type Timetable = Node & {
  __typename?: 'Timetable';
  /** The ID of an object */
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  semester?: Maybe<Semester>;
  courseOfferingSelections?: Maybe<Array<Maybe<CourseOfferingSelection>>>;
};

export type TimetableConnection = {
  __typename?: 'TimetableConnection';
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int'];
  /**
   * Information to aid in pagination.
   * https://relay.dev/graphql/connections.htm#sec-undefined.PageInfo
   */
  pageInfo: PageInfo;
  /**
   * A list of edges.
   * https://relay.dev/graphql/connections.htm#sec-Edge-Types
   */
  edges?: Maybe<Array<Maybe<TimetableEdge>>>;
};

export type TimetableEdge = {
  __typename?: 'TimetableEdge';
  /**
   * The item at the end of the edge.
   * https://relay.dev/graphql/connections.htm#sec-Node
   */
  node?: Maybe<Timetable>;
  /**
   * A cursor for use in pagination.
   * https://relay.dev/graphql/connections.htm#sec-Cursor
   */
  cursor: Scalars['Cursor'];
};

export type CreateTimetableInput = {
  name?: Maybe<Scalars['String']>;
  semesterId: Scalars['ID'];
};

export type CreateTimetablePayload = {
  __typename?: 'CreateTimetablePayload';
  timetable?: Maybe<Timetable>;
};

export type UpdateTimetableInput = {
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
};

export type UpdateTimetablePayload = {
  __typename?: 'UpdateTimetablePayload';
  timetable?: Maybe<Timetable>;
};

export type DeleteTimetableInput = {
  /** The ID of the timetable to delete. */
  id: Scalars['ID'];
};

export type DeleteTimetablePayload = {
  __typename?: 'DeleteTimetablePayload';
  /** The ID of the deleted timetable. */
  deletedTimetableId?: Maybe<Scalars['ID']>;
};

export type User = Node & {
  __typename?: 'User';
  id: Scalars['ID'];
};

export type UserSettings = Node & {
  __typename?: 'UserSettings';
  id: Scalars['ID'];
  beta?: Maybe<Scalars['Boolean']>;
  enableDisqusAutoload?: Maybe<Scalars['Boolean']>;
  enableModregReminder?: Maybe<Scalars['Boolean']>;
  enableTrackers?: Maybe<Scalars['Boolean']>;
  nightMode?: Maybe<Scalars['Boolean']>;
  theme?: Maybe<Scalars['String']>;
};

export type UpdateSettingsInput = {
  beta?: Maybe<Scalars['Boolean']>;
  enableDisqusAutoload?: Maybe<Scalars['Boolean']>;
  enableModregReminder?: Maybe<Scalars['Boolean']>;
  enableTrackers?: Maybe<Scalars['Boolean']>;
  nightMode?: Maybe<Scalars['Boolean']>;
  theme?: Maybe<Scalars['String']>;
};

export type UpdateSettingsPayload = {
  __typename?: 'UpdateSettingsPayload';
  settings?: Maybe<UserSettings>;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['Cursor']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['Cursor']>;
};

export type CreateAcadYearMutationVariables = Exact<{
  input: CreateAcadYearInput;
}>;

export type CreateAcadYearMutation = { __typename?: 'Mutation' } & {
  createAcadYear: { __typename?: 'CreateAcadYearPayload' } & {
    acadYear?: Maybe<{ __typename?: 'AcadYear' } & Pick<AcadYear, 'id'>>;
  };
};

export type CreateSchoolMutationVariables = Exact<{
  input: CreateSchoolInput;
}>;

export type CreateSchoolMutation = { __typename?: 'Mutation' } & {
  createSchool: { __typename?: 'CreateSchoolPayload' } & {
    school?: Maybe<{ __typename?: 'School' } & Pick<School, 'id'>>;
  };
};

export type CreateSemesterMutationVariables = Exact<{
  input: CreateSemesterInput;
}>;

export type CreateSemesterMutation = { __typename?: 'Mutation' } & {
  createSemester: { __typename?: 'CreateSemesterPayload' } & {
    semester?: Maybe<{ __typename?: 'Semester' } & Pick<Semester, 'id' | 'name'>>;
  };
};

export type DeleteCourseMutationVariables = Exact<{
  input: DeleteCourseInput;
}>;

export type DeleteCourseMutation = { __typename?: 'Mutation' } & {
  deleteCourse: { __typename?: 'DeleteCoursePayload' } & Pick<
    DeleteCoursePayload,
    'deletedCourseCode'
  >;
};

export type QueryAdminInfoQueryVariables = Exact<{
  schoolShortName: Scalars['String'];
  academicYear: Scalars['String'];
}>;

export type QueryAdminInfoQuery = { __typename?: 'Query' } & {
  schoolWithShortName?: Maybe<
    { __typename?: 'School' } & Pick<School, 'id'> & {
        acadYearWithName?: Maybe<
          { __typename?: 'AcadYear' } & Pick<AcadYear, 'id'> & {
              semesters?: Maybe<
                Array<Maybe<{ __typename?: 'Semester' } & Pick<Semester, 'id' | 'name'>>>
              >;
            }
        >;
      }
  >;
};

export type QueryCourseCodesQueryVariables = Exact<{
  acadYearId: Scalars['ID'];
}>;

export type QueryCourseCodesQuery = { __typename?: 'Query' } & {
  node?: Maybe<
    | ({ __typename: 'AcadYear' } & {
        courses?: Maybe<Array<Maybe<{ __typename?: 'Course' } & Pick<Course, 'code'>>>>;
      })
    | { __typename: 'Course' }
    | { __typename: 'CourseOffering' }
    | { __typename: 'CourseOfferingSelection' }
    | { __typename: 'Exam' }
    | { __typename: 'ExamTimeslot' }
    | { __typename: 'Lesson' }
    | { __typename: 'LessonGroup' }
    | { __typename: 'LessonGroupSelection' }
    | { __typename: 'School' }
    | { __typename: 'Semester' }
    | { __typename: 'Timetable' }
    | { __typename: 'User' }
    | { __typename: 'UserSettings' }
  >;
};

export type UpsertCourseMutationVariables = Exact<{
  input: UpsertCourseInput;
}>;

export type UpsertCourseMutation = { __typename?: 'Mutation' } & {
  upsertCourse: { __typename?: 'UpsertCoursePayload' } & {
    course?: Maybe<{ __typename?: 'Course' } & Pick<Course, 'code'>>;
  };
};

export const CreateAcadYearDocument = gql`
  mutation CreateAcadYear($input: CreateAcadYearInput!) {
    createAcadYear(input: $input) {
      acadYear {
        id
      }
    }
  }
`;
export const CreateSchoolDocument = gql`
  mutation CreateSchool($input: CreateSchoolInput!) {
    createSchool(input: $input) {
      school {
        id
      }
    }
  }
`;
export const CreateSemesterDocument = gql`
  mutation CreateSemester($input: CreateSemesterInput!) {
    createSemester(input: $input) {
      semester {
        id
        name
      }
    }
  }
`;
export const DeleteCourseDocument = gql`
  mutation DeleteCourse($input: DeleteCourseInput!) {
    deleteCourse(input: $input) {
      deletedCourseCode
    }
  }
`;
export const QueryAdminInfoDocument = gql`
  query QueryAdminInfo($schoolShortName: String!, $academicYear: String!) {
    schoolWithShortName(shortName: $schoolShortName) {
      id
      acadYearWithName(name: $academicYear) {
        id
        semesters {
          id
          name
        }
      }
    }
  }
`;
export const QueryCourseCodesDocument = gql`
  query QueryCourseCodes($acadYearId: ID!) {
    node(id: $acadYearId) {
      __typename
      ... on AcadYear {
        courses {
          code
        }
      }
    }
  }
`;
export const UpsertCourseDocument = gql`
  mutation UpsertCourse($input: UpsertCourseInput!) {
    upsertCourse(input: $input) {
      course {
        code
      }
    }
  }
`;

export type SdkFunctionWrapper = <T>(action: () => Promise<T>) => Promise<T>;

const defaultWrapper: SdkFunctionWrapper = (sdkFunction) => sdkFunction();
export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    CreateAcadYear(
      variables: CreateAcadYearMutationVariables,
      requestHeaders?: Headers,
    ): Promise<CreateAcadYearMutation> {
      return withWrapper(() =>
        client.request<CreateAcadYearMutation>(
          print(CreateAcadYearDocument),
          variables,
          requestHeaders,
        ),
      );
    },
    CreateSchool(
      variables: CreateSchoolMutationVariables,
      requestHeaders?: Headers,
    ): Promise<CreateSchoolMutation> {
      return withWrapper(() =>
        client.request<CreateSchoolMutation>(
          print(CreateSchoolDocument),
          variables,
          requestHeaders,
        ),
      );
    },
    CreateSemester(
      variables: CreateSemesterMutationVariables,
      requestHeaders?: Headers,
    ): Promise<CreateSemesterMutation> {
      return withWrapper(() =>
        client.request<CreateSemesterMutation>(
          print(CreateSemesterDocument),
          variables,
          requestHeaders,
        ),
      );
    },
    DeleteCourse(
      variables: DeleteCourseMutationVariables,
      requestHeaders?: Headers,
    ): Promise<DeleteCourseMutation> {
      return withWrapper(() =>
        client.request<DeleteCourseMutation>(
          print(DeleteCourseDocument),
          variables,
          requestHeaders,
        ),
      );
    },
    QueryAdminInfo(
      variables: QueryAdminInfoQueryVariables,
      requestHeaders?: Headers,
    ): Promise<QueryAdminInfoQuery> {
      return withWrapper(() =>
        client.request<QueryAdminInfoQuery>(
          print(QueryAdminInfoDocument),
          variables,
          requestHeaders,
        ),
      );
    },
    QueryCourseCodes(
      variables: QueryCourseCodesQueryVariables,
      requestHeaders?: Headers,
    ): Promise<QueryCourseCodesQuery> {
      return withWrapper(() =>
        client.request<QueryCourseCodesQuery>(
          print(QueryCourseCodesDocument),
          variables,
          requestHeaders,
        ),
      );
    },
    UpsertCourse(
      variables: UpsertCourseMutationVariables,
      requestHeaders?: Headers,
    ): Promise<UpsertCourseMutation> {
      return withWrapper(() =>
        client.request<UpsertCourseMutation>(
          print(UpsertCourseDocument),
          variables,
          requestHeaders,
        ),
      );
    },
  };
}
export type Sdk = ReturnType<typeof getSdk>;
