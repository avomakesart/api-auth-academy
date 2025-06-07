/* eslint-disable */
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
};

export type AddToCartInput = {
  itemId: Scalars['ID']['input'];
  notes?: InputMaybe<Scalars['String']['input']>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
};

export type Answer = {
  __typename?: 'Answer';
  correctAnswers?: Maybe<Array<Scalars['String']['output']>>;
  createdAt: Scalars['String']['output'];
  gapMatch?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<Scalars['String']['output']>;
  isCorrect: Scalars['Boolean']['output'];
  order: Scalars['Int']['output'];
  question?: Maybe<Question>;
  settings?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  type: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
  viewFormat?: Maybe<Scalars['String']['output']>;
};

export type AnswerInput = {
  ID?: InputMaybe<Scalars['String']['input']>;
  correctAnswers?: InputMaybe<Array<Scalars['String']['input']>>;
  gapMatch?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  isCorrect: Scalars['Boolean']['input'];
  order: Scalars['Int']['input'];
  settings?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
  type: Scalars['String']['input'];
  updatedAt: Scalars['String']['input'];
  viewFormat?: InputMaybe<Scalars['String']['input']>;
};

export type AuthResult = {
  __typename?: 'AuthResult';
  role: Scalars['String']['output'];
  token: Scalars['String']['output'];
};

export type Cart = {
  __typename?: 'Cart';
  createdAt: Scalars['String']['output'];
  expiresAt: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  items: Array<CartItem>;
  subtotal: Scalars['Float']['output'];
  tax: Scalars['Float']['output'];
  total: Scalars['Float']['output'];
  updatedAt: Scalars['String']['output'];
  userId?: Maybe<Scalars['ID']['output']>;
};

export type CartItem = {
  __typename?: 'CartItem';
  cartId: Scalars['ID']['output'];
  createdAt: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  inStock: Scalars['Boolean']['output'];
  item: CartItemDetails;
  itemId: Scalars['ID']['output'];
  itemType: ItemType;
  notes?: Maybe<Scalars['String']['output']>;
  quantity: Scalars['Int']['output'];
  unitPrice: Scalars['Float']['output'];
};

export type CartItemDetails = Course | CourseBundle | SubscriptionPlan;

export type Category = {
  __typename?: 'Category';
  coursesCount?: Maybe<Scalars['Int']['output']>;
  createdAt: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
};

export type Certificate = {
  __typename?: 'Certificate';
  course: Course;
  id: Scalars['ID']['output'];
  issuedAt: Scalars['String']['output'];
  template: CertificateTemplate;
  user: User;
};

export type CertificateTemplate = {
  __typename?: 'CertificateTemplate';
  background?: Maybe<Scalars['String']['output']>;
  content: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  logoUrl?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
};

export type CertificateTemplateInput = {
  background?: InputMaybe<Scalars['String']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  logoUrl?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

export type CheckoutSession = {
  __typename?: 'CheckoutSession';
  clientSecret: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  url: Scalars['String']['output'];
};

export type Company = {
  __typename?: 'Company';
  address?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['String']['output'];
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  isActive?: Maybe<Scalars['Boolean']['output']>;
  name: Scalars['String']['output'];
  setupIntentClientSecret?: Maybe<Scalars['String']['output']>;
  stripeId?: Maybe<Scalars['String']['output']>;
  subscriptions: Array<CompanySubscription>;
  taxId?: Maybe<Scalars['String']['output']>;
  taxName?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['String']['output'];
};

export type CompanySubscription = {
  __typename?: 'CompanySubscription';
  activeSubscriptions: Array<UserSubscription>;
  company: Company;
  createdAt: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  plan: SubscriptionPlan;
  quantity: Scalars['Int']['output'];
  setupIntentClientSecret?: Maybe<Scalars['String']['output']>;
  status: Scalars['String']['output'];
  stripeSubscriptionId: Scalars['String']['output'];
  subscriptionCodes: Array<SubscriptionCode>;
  updatedAt: Scalars['String']['output'];
};

export type Course = {
  __typename?: 'Course';
  category?: Maybe<Category>;
  certificates?: Maybe<Array<Certificate>>;
  createdAt: Scalars['String']['output'];
  creator?: Maybe<User>;
  creatorID?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  discountedPrice?: Maybe<Scalars['Float']['output']>;
  duration: Scalars['Int']['output'];
  enrollments?: Maybe<Array<Enrollment>>;
  extraSettings?: Maybe<Array<ExtraSettings>>;
  featuredImage: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  instructors?: Maybe<Array<User>>;
  level?: Maybe<Level>;
  maxEnrollments?: Maybe<Scalars['Int']['output']>;
  metadata?: Maybe<CourseMetadata>;
  price: Scalars['Float']['output'];
  progress?: Maybe<CourseProgress>;
  promotionDuration?: Maybe<Scalars['Int']['output']>;
  publishedAt?: Maybe<Scalars['String']['output']>;
  requirements?: Maybe<Scalars['String']['output']>;
  reviews?: Maybe<Array<Review>>;
  scheduledPublishAt?: Maybe<Scalars['String']['output']>;
  shortDescription?: Maybe<Scalars['String']['output']>;
  status?: Maybe<CourseStatus>;
  tags?: Maybe<Array<Scalars['String']['output']>>;
  title: Scalars['String']['output'];
  topics?: Maybe<Array<Topic>>;
  updatedAt: Scalars['String']['output'];
  video?: Maybe<Video>;
  visibility?: Maybe<Visibility>;
};

export type CourseBundle = {
  __typename?: 'CourseBundle';
  courses: Array<Maybe<Course>>;
  createdAt: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  discountType?: Maybe<DiscountType>;
  discountValue?: Maybe<Scalars['Float']['output']>;
  featuredImage: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  price: Scalars['Float']['output'];
  subtotalRegularPrice?: Maybe<Scalars['Float']['output']>;
  title: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
};

export type CourseEnrollment = {
  __typename?: 'CourseEnrollment';
  course: Course;
  enrolledAt: Scalars['String']['output'];
  status: EnrollmentStatus;
};

export type CourseEnrollments = {
  __typename?: 'CourseEnrollments';
  courses: Array<CourseEnrollment>;
  id: Scalars['ID']['output'];
  user: User;
};

export type CourseMetadata = {
  __typename?: 'CourseMetadata';
  benefits?: Maybe<Scalars['String']['output']>;
  course: Course;
  id?: Maybe<Scalars['ID']['output']>;
  learnings?: Maybe<Scalars['String']['output']>;
  materialsIncluded?: Maybe<Scalars['String']['output']>;
  requirements?: Maybe<Scalars['String']['output']>;
  targetAudience?: Maybe<Scalars['String']['output']>;
};

export type CourseMetadataInput = {
  benefits?: InputMaybe<Scalars['String']['input']>;
  learnings?: InputMaybe<Scalars['String']['input']>;
  materialsIncluded?: InputMaybe<Scalars['String']['input']>;
  requirementsInstructions?: InputMaybe<Scalars['String']['input']>;
  targetAudience?: InputMaybe<Scalars['String']['input']>;
};

export type CourseProgress = {
  __typename?: 'CourseProgress';
  averageCompletionTime?: Maybe<Scalars['Float']['output']>;
  averageScore?: Maybe<Scalars['Float']['output']>;
  completed?: Maybe<Scalars['Boolean']['output']>;
  completedAt?: Maybe<Scalars['String']['output']>;
  completedLessons?: Maybe<Scalars['Int']['output']>;
  completedQuizzes?: Maybe<Scalars['Int']['output']>;
  course: Course;
  createdAt: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  progressPercentage: Scalars['Float']['output'];
  startedAt: Scalars['String']['output'];
  totalAssignments?: Maybe<Scalars['Int']['output']>;
  totalLessons?: Maybe<Scalars['Int']['output']>;
  totalQuizzes?: Maybe<Scalars['Int']['output']>;
  updatedAt: Scalars['String']['output'];
  user: User;
};

export enum CourseStatus {
  Draft = 'DRAFT',
  InPause = 'IN_PAUSE',
  Published = 'PUBLISHED'
}

export type CreateCertificateInput = {
  certificateTemplateId: Scalars['String']['input'];
  courseId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type CreateCompanyInput = {
  address: Scalars['String']['input'];
  email: Scalars['String']['input'];
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  taxId?: InputMaybe<Scalars['String']['input']>;
  taxName?: InputMaybe<Scalars['String']['input']>;
};

export type CreateCourseBundleInput = {
  courseIds: Array<Scalars['ID']['input']>;
  description: Scalars['String']['input'];
  discountType?: InputMaybe<DiscountType>;
  discountValue?: InputMaybe<Scalars['Float']['input']>;
  featuredImage: Scalars['String']['input'];
  price: Scalars['Float']['input'];
  subtotalRegularPrice?: InputMaybe<Scalars['Float']['input']>;
  title: Scalars['String']['input'];
};

export type CreateCourseInput = {
  categoryId?: InputMaybe<Scalars['ID']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  duration: Scalars['Int']['input'];
  featuredImage?: InputMaybe<Scalars['String']['input']>;
  instructorIds: Array<Scalars['ID']['input']>;
  levelId?: InputMaybe<Scalars['ID']['input']>;
  metadata?: InputMaybe<CourseMetadataInput>;
  previews?: InputMaybe<VideoInput>;
  price: Scalars['Float']['input'];
  requirements?: InputMaybe<Scalars['String']['input']>;
  status: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type CreateInitialCourseInput = {
  categoryId?: InputMaybe<Scalars['ID']['input']>;
  levelId?: InputMaybe<Scalars['ID']['input']>;
  status: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type CreateLessonInput = {
  attachments?: InputMaybe<Array<Scalars['String']['input']>>;
  content: Scalars['String']['input'];
  featuredImage?: InputMaybe<Scalars['String']['input']>;
  position: Scalars['Int']['input'];
  showPreview?: InputMaybe<Scalars['Boolean']['input']>;
  title: Scalars['String']['input'];
  topicId: Scalars['ID']['input'];
  video?: InputMaybe<VideoInput>;
};

export type CreateLevelOrCategoryInput = {
  description: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type CreateLiveClassInput = {
  courseId: Scalars['String']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  endTime: Scalars['String']['input'];
  instructorId: Scalars['String']['input'];
  meetingLink: Scalars['String']['input'];
  startTime: Scalars['String']['input'];
};

export type CreateQuestionInput = {
  answerExplanation?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  media?: InputMaybe<Scalars['String']['input']>;
  questionMark?: InputMaybe<Scalars['Int']['input']>;
  questionOrder?: InputMaybe<Scalars['Int']['input']>;
  questionSettings?: InputMaybe<QuestionSettingsInput>;
  quizID: Scalars['ID']['input'];
  title: Scalars['String']['input'];
  type: QuestionType;
};

export type CreateQuizInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  maxAttempts?: InputMaybe<Scalars['Int']['input']>;
  passingGrade?: InputMaybe<Scalars['Int']['input']>;
  position?: InputMaybe<Scalars['Int']['input']>;
  timeUnit?: InputMaybe<Scalars['String']['input']>;
  timer?: InputMaybe<Scalars['Int']['input']>;
  title: Scalars['String']['input'];
  topicID: Scalars['ID']['input'];
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type CreateRoleInput = {
  description: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type CreateSubscriptionPlanInput = {
  categoryId?: InputMaybe<Scalars['ID']['input']>;
  duration: Scalars['Int']['input'];
  planDescription?: InputMaybe<Scalars['String']['input']>;
  planName: Scalars['String']['input'];
  price: Scalars['Float']['input'];
};

export type CreateTopicInput = {
  courseID: Scalars['ID']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['Int']['input']>;
  title: Scalars['String']['input'];
};

export type CreateUserInput = {
  companyId?: InputMaybe<Scalars['ID']['input']>;
  email: Scalars['String']['input'];
  fullName?: InputMaybe<Scalars['String']['input']>;
  password: Scalars['String']['input'];
  role?: InputMaybe<Scalars['String']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
  username: Scalars['String']['input'];
};

export enum DiscountType {
  Fixed = 'FIXED',
  Percentage = 'PERCENTAGE'
}

export type Enrollment = {
  __typename?: 'Enrollment';
  course: Course;
  enrolledAt: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  status: EnrollmentStatus;
  user: User;
};

export enum EnrollmentStatus {
  Active = 'ACTIVE',
  Completed = 'COMPLETED',
  Dropped = 'DROPPED'
}

export type ExtraSettings = {
  __typename?: 'ExtraSettings';
  key?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

export type ExtraSettingsInput = {
  key?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export type Instructor = {
  __typename?: 'Instructor';
  assignedAt?: Maybe<Scalars['String']['output']>;
  courses: Array<Course>;
  id: Scalars['ID']['output'];
  isActive?: Maybe<Scalars['Boolean']['output']>;
  role?: Maybe<Scalars['String']['output']>;
  user: User;
};

export enum ItemType {
  Bundle = 'BUNDLE',
  Course = 'COURSE',
  Subscription = 'SUBSCRIPTION'
}

export type Lesson = {
  __typename?: 'Lesson';
  attachments?: Maybe<Array<Scalars['String']['output']>>;
  content?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['String']['output'];
  featuredImage?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  position?: Maybe<Scalars['Int']['output']>;
  progress?: Maybe<LessonProgress>;
  showPreview?: Maybe<Scalars['Boolean']['output']>;
  title: Scalars['String']['output'];
  topic?: Maybe<Topic>;
  updatedAt: Scalars['String']['output'];
  video?: Maybe<Video>;
};

export type LessonProgress = {
  __typename?: 'LessonProgress';
  completed: Scalars['Boolean']['output'];
  completedAt?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  lesson: Lesson;
  startedAt?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['String']['output']>;
  user: User;
};

export type Level = {
  __typename?: 'Level';
  createdAt: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
};

export type LiveClass = {
  __typename?: 'LiveClass';
  course: Course;
  description?: Maybe<Scalars['String']['output']>;
  endTime: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  instructor: Instructor;
  meetingLink: Scalars['String']['output'];
  startTime: Scalars['String']['output'];
};

export type Login = {
  email?: InputMaybe<Scalars['String']['input']>;
  password: Scalars['String']['input'];
  username?: InputMaybe<Scalars['String']['input']>;
};

export type MarkLessonCompletedInput = {
  lessonId: Scalars['ID']['input'];
};

export type MatrixMatch = {
  __typename?: 'MatrixMatch';
  columnA: Scalars['String']['output'];
  columnB: Scalars['String']['output'];
};

export type MatrixMatchInput = {
  columnA: Scalars['String']['input'];
  columnB: Scalars['String']['input'];
};

export type Me = {
  __typename?: 'Me';
  authProvider?: Maybe<Scalars['String']['output']>;
  bundles?: Maybe<Array<CourseBundle>>;
  carts: Cart;
  company?: Maybe<Company>;
  courses: Array<Maybe<Course>>;
  createdAt?: Maybe<Scalars['String']['output']>;
  customerId: Scalars['ID']['output'];
  email: Scalars['String']['output'];
  fullName: Scalars['String']['output'];
  interests?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  isActive?: Maybe<Scalars['Boolean']['output']>;
  isVerified?: Maybe<Scalars['Boolean']['output']>;
  major?: Maybe<Scalars['String']['output']>;
  occupation?: Maybe<Scalars['String']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  profilePicture?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Scalars['String']['output']>;
  socialId?: Maybe<Scalars['String']['output']>;
  stripeId?: Maybe<Scalars['String']['output']>;
  subscription?: Maybe<UserSubscription>;
  updatedAt?: Maybe<Scalars['String']['output']>;
  userName: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  activateCompanySubscription: UserSubscription;
  activateSubscription: UserSubscription;
  addToCart: Cart;
  assignInstructor: Instructor;
  assignSubscriptionCode: SubscriptionCode;
  cancelUserSubscription: Scalars['Boolean']['output'];
  changePassword: Scalars['String']['output'];
  checkout: CheckoutSession;
  createBulkSubscriptionCodes: Array<SubscriptionCode>;
  createCategory: Category;
  createCertificate: Certificate;
  createCertificateTemplate: CertificateTemplate;
  createCompany: Company;
  createCourseBundle: CourseBundle;
  createEnrollment: Enrollment;
  createInitialCourse: Course;
  createLesson: Lesson;
  createLevel: Level;
  createLiveClass: LiveClass;
  createQuestion: Question;
  createQuiz: Quiz;
  createRole: Roles;
  createSubscriptionPlan: SubscriptionPlan;
  createTopic: Topic;
  createUser: Scalars['String']['output'];
  deleteCategory?: Maybe<Scalars['Boolean']['output']>;
  deleteCertificate?: Maybe<Scalars['Boolean']['output']>;
  deleteCertificateTemplate?: Maybe<Scalars['Boolean']['output']>;
  deleteCompany?: Maybe<Scalars['Boolean']['output']>;
  deleteCourse?: Maybe<Scalars['Boolean']['output']>;
  deleteCourseBundle: Scalars['Boolean']['output'];
  deleteEnrollment?: Maybe<Scalars['Boolean']['output']>;
  deleteLesson?: Maybe<Scalars['Boolean']['output']>;
  deleteLevel?: Maybe<Scalars['Boolean']['output']>;
  deleteLiveClass?: Maybe<Scalars['Boolean']['output']>;
  deleteQuestion?: Maybe<Scalars['Boolean']['output']>;
  deleteQuiz?: Maybe<Scalars['Boolean']['output']>;
  deleteRole?: Maybe<Scalars['Boolean']['output']>;
  deleteSubscriptionPlan: Scalars['Boolean']['output'];
  deleteTopic?: Maybe<Scalars['Boolean']['output']>;
  deleteUser?: Maybe<Scalars['Boolean']['output']>;
  login: AuthResult;
  logout: Scalars['Boolean']['output'];
  markLessonCompleted?: Maybe<LessonProgress>;
  payCompanySubscription: PayCompanySubscriptionResult;
  refreshToken: Scalars['String']['output'];
  removeFromCart: Cart;
  requestSubscriptionCodes: CompanySubscription;
  resetPassword: Scalars['String']['output'];
  startCourseProgress?: Maybe<CourseProgress>;
  submitQuizAttempt?: Maybe<QuizProgress>;
  subscribeUser: UserSubscription;
  toggleSubscriptionStatus: UserSubscription;
  unassignInstructor: Scalars['Boolean']['output'];
  updateCategory: Category;
  updateCertificate: Certificate;
  updateCertificateTemplate: CertificateTemplate;
  updateCompany: Company;
  updateCourse: Course;
  updateCourseBundle: CourseBundle;
  updateCourseProgress?: Maybe<CourseProgress>;
  updateEnrollmentStatus: Enrollment;
  updateLesson: Lesson;
  updateLevel: Level;
  updateLiveClass: LiveClass;
  updateQuestion: Question;
  updateQuiz: Quiz;
  updateQuizProgress?: Maybe<QuizProgress>;
  updateRole: Roles;
  updateSubscriptionPlan: SubscriptionPlan;
  updateTopic: Topic;
  updateUser: User;
  updateUserPassword: Scalars['Boolean']['output'];
  updateUserProfile: UserProfile;
  validateUniqueUser: Scalars['Boolean']['output'];
};


export type MutationActivateCompanySubscriptionArgs = {
  token: Scalars['String']['input'];
};


export type MutationActivateSubscriptionArgs = {
  code: Scalars['String']['input'];
};


export type MutationAddToCartArgs = {
  input: AddToCartInput;
};


export type MutationAssignInstructorArgs = {
  courseId: Scalars['ID']['input'];
  userId: Scalars['ID']['input'];
};


export type MutationAssignSubscriptionCodeArgs = {
  codeId: Scalars['ID']['input'];
  email: Scalars['String']['input'];
};


export type MutationCancelUserSubscriptionArgs = {
  subscriptionId: Scalars['ID']['input'];
};


export type MutationChangePasswordArgs = {
  password: Scalars['String']['input'];
  token: Scalars['String']['input'];
};


export type MutationCheckoutArgs = {
  cartId: Scalars['ID']['input'];
};


export type MutationCreateBulkSubscriptionCodesArgs = {
  companyId?: InputMaybe<Scalars['ID']['input']>;
  planId: Scalars['ID']['input'];
  quantity: Scalars['Int']['input'];
  recurring: Scalars['Boolean']['input'];
};


export type MutationCreateCategoryArgs = {
  input: CreateLevelOrCategoryInput;
};


export type MutationCreateCertificateArgs = {
  input: CreateCertificateInput;
};


export type MutationCreateCertificateTemplateArgs = {
  input: CertificateTemplateInput;
};


export type MutationCreateCompanyArgs = {
  input?: InputMaybe<CreateCompanyInput>;
};


export type MutationCreateCourseBundleArgs = {
  input: CreateCourseBundleInput;
};


export type MutationCreateEnrollmentArgs = {
  courseId: Scalars['ID']['input'];
  userId: Scalars['ID']['input'];
};


export type MutationCreateInitialCourseArgs = {
  input: CreateInitialCourseInput;
};


export type MutationCreateLessonArgs = {
  input: CreateLessonInput;
};


export type MutationCreateLevelArgs = {
  input: CreateLevelOrCategoryInput;
};


export type MutationCreateLiveClassArgs = {
  input: CreateLiveClassInput;
};


export type MutationCreateQuestionArgs = {
  input: CreateQuestionInput;
};


export type MutationCreateQuizArgs = {
  input: CreateQuizInput;
};


export type MutationCreateRoleArgs = {
  input: CreateRoleInput;
};


export type MutationCreateSubscriptionPlanArgs = {
  input: CreateSubscriptionPlanInput;
};


export type MutationCreateTopicArgs = {
  input: CreateTopicInput;
};


export type MutationCreateUserArgs = {
  input: CreateUserInput;
};


export type MutationDeleteCategoryArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteCertificateArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteCertificateTemplateArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteCompanyArgs = {
  companyId: Scalars['ID']['input'];
};


export type MutationDeleteCourseArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteCourseBundleArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteEnrollmentArgs = {
  enrollmentId: Scalars['ID']['input'];
};


export type MutationDeleteLessonArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteLevelArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteLiveClassArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteQuestionArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteQuizArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteRoleArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteSubscriptionPlanArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteTopicArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUserArgs = {
  id: Scalars['ID']['input'];
};


export type MutationLoginArgs = {
  input: Login;
};


export type MutationMarkLessonCompletedArgs = {
  input: MarkLessonCompletedInput;
};


export type MutationPayCompanySubscriptionArgs = {
  companySubscriptionId: Scalars['ID']['input'];
  paymentMethodId?: InputMaybe<Scalars['String']['input']>;
};


export type MutationRefreshTokenArgs = {
  input: RefreshTokenInput;
};


export type MutationRemoveFromCartArgs = {
  itemId: Scalars['ID']['input'];
};


export type MutationRequestSubscriptionCodesArgs = {
  companyId: Scalars['ID']['input'];
  planId: Scalars['ID']['input'];
  quantity: Scalars['Int']['input'];
};


export type MutationResetPasswordArgs = {
  email: Scalars['String']['input'];
};


export type MutationStartCourseProgressArgs = {
  input: StartCourseProgressInput;
};


export type MutationSubmitQuizAttemptArgs = {
  input: SubmitQuizAttemptInput;
};


export type MutationSubscribeUserArgs = {
  input: SubscribeUserInput;
};


export type MutationToggleSubscriptionStatusArgs = {
  isActive: Scalars['Boolean']['input'];
  subscriptionId: Scalars['ID']['input'];
  userID: Scalars['ID']['input'];
};


export type MutationUnassignInstructorArgs = {
  courseId: Scalars['ID']['input'];
  userId: Scalars['ID']['input'];
};


export type MutationUpdateCategoryArgs = {
  id: Scalars['ID']['input'];
  input: UpdateLevelOrCategoryInput;
};


export type MutationUpdateCertificateArgs = {
  input: UpdateCertificateInput;
};


export type MutationUpdateCertificateTemplateArgs = {
  id: Scalars['ID']['input'];
  input: UpdateCertificateTemplateInput;
};


export type MutationUpdateCompanyArgs = {
  companyId: Scalars['ID']['input'];
  input?: InputMaybe<UpdateCompanyInput>;
};


export type MutationUpdateCourseArgs = {
  id: Scalars['ID']['input'];
  input?: InputMaybe<UpdateCourseInput>;
};


export type MutationUpdateCourseBundleArgs = {
  input: UpdateCourseBundleInput;
};


export type MutationUpdateCourseProgressArgs = {
  input: UpdateCourseProgressInput;
};


export type MutationUpdateEnrollmentStatusArgs = {
  enrollmentId: Scalars['ID']['input'];
  status: Scalars['String']['input'];
};


export type MutationUpdateLessonArgs = {
  id: Scalars['ID']['input'];
  input: UpdateLessonInput;
};


export type MutationUpdateLevelArgs = {
  id: Scalars['ID']['input'];
  input: UpdateLevelOrCategoryInput;
};


export type MutationUpdateLiveClassArgs = {
  id: Scalars['ID']['input'];
  input: UpdateLiveClassInput;
};


export type MutationUpdateQuestionArgs = {
  id: Scalars['ID']['input'];
  input: UpdateQuestionInput;
};


export type MutationUpdateQuizArgs = {
  id: Scalars['ID']['input'];
  input?: InputMaybe<UpdateQuizInput>;
};


export type MutationUpdateQuizProgressArgs = {
  input: QuizProgressInput;
};


export type MutationUpdateRoleArgs = {
  id: Scalars['ID']['input'];
  input: UpdateRoleInput;
};


export type MutationUpdateSubscriptionPlanArgs = {
  input: UpdateSubscriptionPlanInput;
};


export type MutationUpdateTopicArgs = {
  id: Scalars['ID']['input'];
  input?: InputMaybe<UpdateTopicInput>;
};


export type MutationUpdateUserArgs = {
  id: Scalars['ID']['input'];
  input: UpdateUserInput;
};


export type MutationUpdateUserPasswordArgs = {
  input: UpdateUserPasswordInput;
};


export type MutationUpdateUserProfileArgs = {
  input: UpdateUserProfileInput;
};


export type MutationValidateUniqueUserArgs = {
  input: ValidateUniqueUserInput;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  hasNextPage: Scalars['Boolean']['output'];
  limit: Scalars['Int']['output'];
  offset: Scalars['Int']['output'];
  page: Scalars['Int']['output'];
};

export type PaginatedBundle = {
  __typename?: 'PaginatedBundle';
  bundle: Array<CourseBundle>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type PaginatedCourse = {
  __typename?: 'PaginatedCourse';
  course: Array<Course>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type PayCompanySubscriptionResult = CompanySubscription | SetupIntentRequired;

export type Query = {
  __typename?: 'Query';
  activeUserSubscription?: Maybe<UserSubscription>;
  bundle: CourseBundle;
  bundles: PaginatedBundle;
  cart?: Maybe<Cart>;
  companies: Array<Company>;
  company: Company;
  companySubscriptions: Array<CompanySubscription>;
  course: Course;
  courseIntroVideo?: Maybe<Video>;
  courses: PaginatedCourse;
  coursesForInstructor: Array<Course>;
  getCategories: Array<Category>;
  getCategory?: Maybe<Category>;
  getCertificateById?: Maybe<Certificate>;
  getCertificateTemplateById?: Maybe<CertificateTemplate>;
  getCertificateTemplates?: Maybe<Array<CertificateTemplate>>;
  getCertificateTemplatesByCourse?: Maybe<Array<CertificateTemplate>>;
  getCertificates?: Maybe<Array<Certificate>>;
  getCertificatesByCourse?: Maybe<Array<Certificate>>;
  getCertificatesByUser?: Maybe<Array<Certificate>>;
  getCourseEnrollments?: Maybe<Array<Enrollment>>;
  getCourseProgress?: Maybe<CourseProgress>;
  getEnrollmentById?: Maybe<Enrollment>;
  getEnrollments?: Maybe<Array<Enrollment>>;
  getLessonProgress?: Maybe<LessonProgress>;
  getLevel?: Maybe<Level>;
  getLevels: Array<Level>;
  getProfile?: Maybe<Me>;
  getQuizProgress?: Maybe<QuizProgress>;
  getRole?: Maybe<Roles>;
  getUser?: Maybe<User>;
  getUserEnrollments?: Maybe<Array<Enrollment>>;
  getUsers?: Maybe<Array<Maybe<User>>>;
  instructorBundles: PaginatedBundle;
  instructorCourses: PaginatedCourse;
  instructors: Array<Instructor>;
  internalUsers: Array<User>;
  lesson: Lesson;
  lessons: Array<Lesson>;
  lessonsByTopicId: Array<Lesson>;
  listRoles?: Maybe<Array<Maybe<Roles>>>;
  me?: Maybe<Me>;
  question: Question;
  questions: Array<Question>;
  questionsByQuizId: Array<Question>;
  quiz: Quiz;
  quizzes: Array<Quiz>;
  quizzesByTopicId: Array<Quiz>;
  subscriptionPlans: Array<SubscriptionPlan>;
  subscriptionReport: SubscriptionReport;
  topic: Topic;
  topics: Array<Topic>;
  topicsByCourseId: Array<Topic>;
  userSubscriptions: Array<UserSubscription>;
};


export type QueryActiveUserSubscriptionArgs = {
  userId: Scalars['ID']['input'];
};


export type QueryBundleArgs = {
  id: Scalars['ID']['input'];
};


export type QueryBundlesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sortBy?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
};


export type QueryCompanyArgs = {
  id: Scalars['ID']['input'];
};


export type QueryCompanySubscriptionsArgs = {
  companyId: Scalars['ID']['input'];
};


export type QueryCourseArgs = {
  id: Scalars['ID']['input'];
};


export type QueryCourseIntroVideoArgs = {
  courseId: Scalars['ID']['input'];
};


export type QueryCoursesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sortBy?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
};


export type QueryCoursesForInstructorArgs = {
  userId: Scalars['ID']['input'];
};


export type QueryGetCategoryArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryGetCertificateByIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetCertificateTemplateByIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetCertificateTemplatesByCourseArgs = {
  courseId: Scalars['ID']['input'];
};


export type QueryGetCertificatesByCourseArgs = {
  courseId: Scalars['ID']['input'];
};


export type QueryGetCertificatesByUserArgs = {
  userId: Scalars['ID']['input'];
};


export type QueryGetCourseEnrollmentsArgs = {
  courseId: Scalars['ID']['input'];
};


export type QueryGetCourseProgressArgs = {
  courseId: Scalars['ID']['input'];
  userId: Scalars['ID']['input'];
};


export type QueryGetEnrollmentByIdArgs = {
  enrollmentId: Scalars['ID']['input'];
};


export type QueryGetLessonProgressArgs = {
  lessonId: Scalars['ID']['input'];
};


export type QueryGetLevelArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryGetQuizProgressArgs = {
  quizId: Scalars['ID']['input'];
};


export type QueryGetRoleArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetUserArgs = {
  id: Scalars['ID']['input'];
};


export type QueryInstructorBundlesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sortBy?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
};


export type QueryInstructorCoursesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sortBy?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
};


export type QueryLessonArgs = {
  id: Scalars['ID']['input'];
};


export type QueryLessonsByTopicIdArgs = {
  topicId: Scalars['ID']['input'];
};


export type QueryQuestionArgs = {
  id: Scalars['ID']['input'];
};


export type QueryQuestionsByQuizIdArgs = {
  quizId: Scalars['ID']['input'];
};


export type QueryQuizArgs = {
  id: Scalars['ID']['input'];
};


export type QueryQuizzesByTopicIdArgs = {
  topicId: Scalars['ID']['input'];
};


export type QuerySubscriptionReportArgs = {
  companyId: Scalars['ID']['input'];
  companySubscriptionId: Scalars['String']['input'];
};


export type QueryTopicArgs = {
  id: Scalars['ID']['input'];
};


export type QueryTopicsByCourseIdArgs = {
  courseId: Scalars['ID']['input'];
};


export type QueryUserSubscriptionsArgs = {
  userId: Scalars['ID']['input'];
};

export type Question = {
  __typename?: 'Question';
  answerExplanation?: Maybe<Scalars['String']['output']>;
  answers?: Maybe<Array<Answer>>;
  createdAt: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  mark: Scalars['Float']['output'];
  media?: Maybe<Scalars['String']['output']>;
  order: Scalars['Int']['output'];
  quiz?: Maybe<Quiz>;
  settings?: Maybe<QuestionSettings>;
  title: Scalars['String']['output'];
  type: QuestionType;
  updatedAt: Scalars['String']['output'];
};

export type QuestionSettings = {
  __typename?: 'QuestionSettings';
  answerRequired?: Maybe<Scalars['Boolean']['output']>;
  correctAnswers?: Maybe<Array<Scalars['String']['output']>>;
  matrixMatches?: Maybe<Array<MatrixMatch>>;
  questionMark?: Maybe<Scalars['Int']['output']>;
  questionType?: Maybe<QuestionType>;
  randomizeQuestion?: Maybe<Scalars['Boolean']['output']>;
  showQuestionMark?: Maybe<Scalars['Boolean']['output']>;
  sortableItems?: Maybe<Array<Scalars['String']['output']>>;
};

export type QuestionSettingsInput = {
  answerRequired?: InputMaybe<Scalars['Boolean']['input']>;
  correctAnswers?: InputMaybe<Array<Scalars['String']['input']>>;
  matrixMatches?: InputMaybe<Array<MatrixMatchInput>>;
  questionMark?: InputMaybe<Scalars['Int']['input']>;
  questionType?: InputMaybe<QuestionType>;
  randomizeQuestion?: InputMaybe<Scalars['Boolean']['input']>;
  showQuestionMark?: InputMaybe<Scalars['Boolean']['input']>;
  sortableItems?: InputMaybe<Array<Scalars['String']['input']>>;
};

export enum QuestionType {
  Assessment = 'ASSESSMENT',
  Essay = 'ESSAY',
  FillInTheBlanks = 'FILL_IN_THE_BLANKS',
  FreeChoice = 'FREE_CHOICE',
  MatrixSorting = 'MATRIX_SORTING',
  MultipleChoice = 'MULTIPLE_CHOICE',
  SingleChoice = 'SINGLE_CHOICE',
  Sorting = 'SORTING',
  TrueFalse = 'TRUE_FALSE'
}

export type Quiz = {
  __typename?: 'Quiz';
  content?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  maxAttempts?: Maybe<Scalars['Int']['output']>;
  passingGrade: Scalars['Int']['output'];
  position?: Maybe<Scalars['Int']['output']>;
  progress?: Maybe<QuizProgress>;
  questions?: Maybe<Array<Question>>;
  timeUnit?: Maybe<Scalars['String']['output']>;
  timer?: Maybe<Scalars['Int']['output']>;
  title: Scalars['String']['output'];
  topic: Topic;
  updatedAt: Scalars['String']['output'];
};

export type QuizAttempts = {
  __typename?: 'QuizAttempts';
  attemptDate?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  quiz: Quiz;
  score: Scalars['Float']['output'];
  user: User;
};

export type QuizProgress = {
  __typename?: 'QuizProgress';
  completed: Scalars['Boolean']['output'];
  completedAt?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  quiz: Quiz;
  score: Scalars['Float']['output'];
  startedAt: Scalars['String']['output'];
  user: User;
};

export type QuizProgressInput = {
  completed?: InputMaybe<Scalars['Boolean']['input']>;
  completedAt?: InputMaybe<Scalars['String']['input']>;
  quizId: Scalars['ID']['input'];
  score?: InputMaybe<Scalars['Float']['input']>;
  startedAt?: InputMaybe<Scalars['String']['input']>;
};

export type RefreshTokenInput = {
  token: Scalars['String']['input'];
};

export type Review = {
  __typename?: 'Review';
  comment?: Maybe<Scalars['String']['output']>;
  course?: Maybe<Course>;
  createdAt?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  likes?: Maybe<Scalars['Int']['output']>;
  rating?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
};

export type Roles = {
  __typename?: 'Roles';
  createdAt: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
};

export type SetupIntentRequired = {
  __typename?: 'SetupIntentRequired';
  clientSecret: Scalars['String']['output'];
};

export type StartCourseProgressInput = {
  courseId: Scalars['ID']['input'];
};

export type SubmitQuizAttemptInput = {
  attemptDate?: InputMaybe<Scalars['String']['input']>;
  quizId: Scalars['ID']['input'];
  score?: InputMaybe<Scalars['Float']['input']>;
};

export type SubscribeUserInput = {
  planId: Scalars['ID']['input'];
  startDate: Scalars['String']['input'];
  userId: Scalars['ID']['input'];
};

export type SubscriptionCode = {
  __typename?: 'SubscriptionCode';
  code: Scalars['String']['output'];
  company?: Maybe<Company>;
  companySubscription?: Maybe<CompanySubscription>;
  createdAt: Scalars['String']['output'];
  expiresAt?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isRedeemed: Scalars['Boolean']['output'];
  plan: SubscriptionPlan;
  redeemedBy?: Maybe<User>;
  status: Scalars['String']['output'];
  stripeSubscriptionId?: Maybe<Scalars['String']['output']>;
};

export type SubscriptionPlan = {
  __typename?: 'SubscriptionPlan';
  category?: Maybe<Category>;
  createdAt: Scalars['String']['output'];
  duration: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  planDescription?: Maybe<Scalars['String']['output']>;
  planName: Scalars['String']['output'];
  price: Scalars['Float']['output'];
  stripePricePlanID: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
};

export type SubscriptionReport = {
  __typename?: 'SubscriptionReport';
  activeSubscriptions: Scalars['Int']['output'];
  companySubscriptionId: Scalars['String']['output'];
  redeemedSubscriptions: Scalars['Int']['output'];
  totalSubscriptions: Scalars['Int']['output'];
  unredeemedSubscriptions: Scalars['Int']['output'];
};

export type Topic = {
  __typename?: 'Topic';
  course: Course;
  createdAt: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  lessons?: Maybe<Array<Lesson>>;
  position?: Maybe<Scalars['Int']['output']>;
  quizzes?: Maybe<Array<Quiz>>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['String']['output'];
};

export type UpdateCertificateInput = {
  certificateTemplateId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  issuedAt?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateCertificateTemplateInput = {
  background?: InputMaybe<Scalars['String']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  logoUrl?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateCompanyInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  taxId?: InputMaybe<Scalars['String']['input']>;
  taxName?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateCourseBundleInput = {
  courseIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  description?: InputMaybe<Scalars['String']['input']>;
  discountType?: InputMaybe<DiscountType>;
  discountValue?: InputMaybe<Scalars['Float']['input']>;
  featuredImage?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  price?: InputMaybe<Scalars['Float']['input']>;
  subtotalRegularPrice?: InputMaybe<Scalars['Float']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateCourseInput = {
  categoryId?: InputMaybe<Scalars['ID']['input']>;
  creatorId?: InputMaybe<Scalars['ID']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  discountedPrice?: InputMaybe<Scalars['Float']['input']>;
  duration?: InputMaybe<Scalars['Int']['input']>;
  extraSettings?: InputMaybe<Array<ExtraSettingsInput>>;
  featuredImage?: InputMaybe<Scalars['String']['input']>;
  levelId?: InputMaybe<Scalars['ID']['input']>;
  maxEnrollments?: InputMaybe<Scalars['Int']['input']>;
  metadata?: InputMaybe<CourseMetadataInput>;
  price?: InputMaybe<Scalars['Float']['input']>;
  promotionDuration?: InputMaybe<Scalars['Int']['input']>;
  requirements?: InputMaybe<Scalars['String']['input']>;
  scheduledPublishAt?: InputMaybe<Scalars['DateTime']['input']>;
  shortDescription?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<CourseStatus>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  title: Scalars['String']['input'];
  video?: InputMaybe<VideoInput>;
  visibility?: InputMaybe<Visibility>;
};

export type UpdateCourseProgressInput = {
  averageCompletionTime?: InputMaybe<Scalars['Float']['input']>;
  averageScore?: InputMaybe<Scalars['Float']['input']>;
  completed?: InputMaybe<Scalars['Boolean']['input']>;
  completedAt?: InputMaybe<Scalars['String']['input']>;
  completedLessons?: InputMaybe<Scalars['Int']['input']>;
  completedQuizzes?: InputMaybe<Scalars['Int']['input']>;
  courseId: Scalars['ID']['input'];
  progressPercentage?: InputMaybe<Scalars['Float']['input']>;
  userId: Scalars['ID']['input'];
};

export type UpdateLessonInput = {
  attachments?: InputMaybe<Array<Scalars['String']['input']>>;
  content?: InputMaybe<Scalars['String']['input']>;
  featuredImage?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['Int']['input']>;
  showPreview?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  video?: InputMaybe<VideoInput>;
};

export type UpdateLevelOrCategoryInput = {
  description: Scalars['String']['input'];
  name: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateLiveClassInput = {
  courseId?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  endTime?: InputMaybe<Scalars['String']['input']>;
  instructorId?: InputMaybe<Scalars['String']['input']>;
  meetingLink?: InputMaybe<Scalars['String']['input']>;
  startTime?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateQuestionInput = {
  answerExplanation?: InputMaybe<Scalars['String']['input']>;
  answers?: InputMaybe<Array<InputMaybe<AnswerInput>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  media?: InputMaybe<Scalars['String']['input']>;
  questionMark?: InputMaybe<Scalars['Int']['input']>;
  questionOrder?: InputMaybe<Scalars['Int']['input']>;
  questionSettings?: InputMaybe<QuestionSettingsInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<QuestionType>;
};

export type UpdateQuizInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  maxAttempts?: InputMaybe<Scalars['Int']['input']>;
  passingGrade?: InputMaybe<Scalars['Int']['input']>;
  position?: InputMaybe<Scalars['Int']['input']>;
  timeUnit?: InputMaybe<Scalars['String']['input']>;
  timer?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateRoleInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateSubscriptionPlanInput = {
  categoryId?: InputMaybe<Scalars['ID']['input']>;
  duration?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['ID']['input'];
  planDescription?: InputMaybe<Scalars['String']['input']>;
  planName?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateTopicInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateUserInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  fullName?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  profilePicture?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateUserPasswordInput = {
  currentPassword: Scalars['String']['input'];
  newPassword: Scalars['String']['input'];
};

export type UpdateUserProfileInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  fullName?: InputMaybe<Scalars['String']['input']>;
  interests?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  major?: InputMaybe<Scalars['String']['input']>;
  occupation?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  profilePicture?: InputMaybe<Scalars['String']['input']>;
  userName?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  authProvider?: Maybe<Scalars['String']['output']>;
  company?: Maybe<Company>;
  createdAt: Scalars['String']['output'];
  email: Scalars['String']['output'];
  fullName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  interests?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  isActive?: Maybe<Scalars['Boolean']['output']>;
  isVerified?: Maybe<Scalars['Boolean']['output']>;
  major?: Maybe<Scalars['String']['output']>;
  occupation?: Maybe<Scalars['String']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  profilePicture?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Scalars['String']['output']>;
  socialId?: Maybe<Scalars['String']['output']>;
  stripeId?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['String']['output'];
  userName: Scalars['String']['output'];
};

export type UserCategoryAccess = {
  __typename?: 'UserCategoryAccess';
  category: Category;
  endDate?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  startDate: Scalars['String']['output'];
  status?: Maybe<Scalars['String']['output']>;
  user: User;
};

export type UserProfile = {
  __typename?: 'UserProfile';
  email?: Maybe<Scalars['String']['output']>;
  fullName?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  interests?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  major?: Maybe<Scalars['String']['output']>;
  occupation?: Maybe<Scalars['String']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  profilePicture?: Maybe<Scalars['String']['output']>;
  userName?: Maybe<Scalars['String']['output']>;
};

export type UserSubscription = {
  __typename?: 'UserSubscription';
  company?: Maybe<Company>;
  companySubscription?: Maybe<CompanySubscription>;
  endDate: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  isActive: Scalars['Boolean']['output'];
  plan: SubscriptionPlan;
  startDate: Scalars['String']['output'];
  stripeSubscriptionId: Scalars['String']['output'];
  user: User;
};

export type ValidateUniqueUserInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type Video = {
  __typename?: 'Video';
  createdAt: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  duration?: Maybe<Scalars['Int']['output']>;
  format?: Maybe<Scalars['String']['output']>;
  height?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  source?: Maybe<Scalars['String']['output']>;
  tags?: Maybe<Array<Scalars['String']['output']>>;
  type?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['String']['output'];
  videoURL?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Int']['output']>;
};

export type VideoInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  duration?: InputMaybe<Scalars['Int']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Int']['input']>;
  source?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  type?: InputMaybe<Scalars['String']['input']>;
  videoURL?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};

export enum Visibility {
  PasswordProtected = 'PASSWORD_PROTECTED',
  Private = 'PRIVATE',
  Public = 'PUBLIC'
}

export type LoginMutationVariables = Exact<{
  input: Login;
}>;


export type LoginMutation = { __typename: 'Mutation', login: { __typename: 'AuthResult', token: string, role: string } };


export const LoginDocument = {"__meta__":{"hash":"f7ce54c3c19cdf79c0da2c6d9b7845295974417a"},"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Login"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Login"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"login"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"token"}},{"kind":"Field","name":{"kind":"Name","value":"role"}}]}}]}}]} as unknown as DocumentNode<LoginMutation, LoginMutationVariables>;