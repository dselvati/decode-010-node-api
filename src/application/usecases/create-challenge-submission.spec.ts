import { InMemoryStudentsRepostory } from "../../../tests/repositories/in-memory-students-repository"
import { InMemoryChallengesRepostory } from "../../../tests/repositories/in-memory-challenges-repository"
import { CreateChallengeSubmission } from "./create-challenge-submission"
import { Student } from "../../domain/entities/student"
import { Challenge } from "../../domain/entities/challenge"

describe('Create challenge submission use case', () => {
  it('should be able to create a new challenge submission', async () => {
    const studentsRepository = new InMemoryStudentsRepostory()
    const challengeRepository = new InMemoryChallengesRepostory()

    const student = Student.create({
      name: 'Douglas',
      email: 'dougst@hotmail.com'
    })

    const challenge = Challenge.create({
      title: 'Challenge 01',
      instructionsUrl: 'http://example.com'
    })

    studentsRepository.items.push(student)
    challengeRepository.items.push(challenge)

    const sut = new CreateChallengeSubmission(
      studentsRepository,
      challengeRepository,
    )

    const response = await sut.execute({
      // studentId: 'fake-student-id',
      // challengeId: 'fake-challenge-id'
      studentId: student.id,
      challengeId: challenge.id
    })

    expect(response).toBeTruthy()
  })
})