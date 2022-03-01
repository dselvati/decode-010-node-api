import { Submission } from "../../domain/entities/submission"
import { ChallengesRepository } from "../repositories/ChallengesRepository"
import { StudentsRepository } from "../repositories/StudentsRepository"

type CreateChallengeSubmissionRequest = {
  studentId: string
  challengeId: string
}

export class CreateChallengeSubmission {
  constructor(
    private studentsRepository: StudentsRepository,
    private challenges: ChallengesRepository
  ) { }

  async execute({ studentId, challengeId }: CreateChallengeSubmissionRequest) {
    const student = await this.studentsRepository.findById(studentId)

    if (!student) {
      throw new Error('')
    }

    const challenge = await this.challenges.findById(challengeId)

    if (!challenge) {
      throw new Error('')
    }

    const submission = Submission.create({
      studentId,
      challengeId
    })

    return submission
  }
}